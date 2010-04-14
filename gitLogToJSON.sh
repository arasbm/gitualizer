#!/bin/bash
# gitLogToJSON.sh This script converts output of a git-log command to JIT JSON format for graph visualization. 
#  
# Author: Aras Balali Moghaddam

VERSION=0.2
startTime=$(date +%s)

#This function returns a unique file name that doesnt exist where the script is called
function getUniqueFileName() 
{
	if [[ $1 ]] 
	then 
		local OUT=$1 
	else 
		local OUT=git_json.js
	fi
	base=$(basename $OUT)
	extension=${base##*.}
	base=${base%.*}
	lastFileNumber=0;
	while [[ -e $OUT ]]
	do
		OUT="$base-$lastFileNumber.$extension"
		(( lastFileNumber++ ))
	done
	echo $OUT;
}

oldIFS=$IFS # save the field separator  
IFS=$'\n' # new field separator, the end of line 
numberOfCommits=12
lineCount=0 #keeps count of number of lines parsed from git log output
nodeCount=0 #number of nodes parsed into JSON file

#Here are the variables to cunstruct and store a node in the JSON file:
hashId=0
parent=0
authorDate=0
authorName="N/A"
commitDate=0
modificationSum=0 #keeps track of how much is modified in each commit
dirStat=0 #this is a 2D array in the format: N% DIR_NAME N% DIR_NAME ...

#process user options
while getopts ":f:n:" optname
do
  case "$optname" in
    "f")
      OUTPUT=$OPTARG
      ;;
    "n")
      numberOfCommits=$OPTARG
      ;;
    "?")
      echo "Unknown option $OPTARG"
      ;;
    ":")
      echo "No argument value for option $OPTARG"
      ;;
    *)
    # Should not occur
      echo "Unknown error while processing options"
      ;;
  esac
done

OUTPUT=$(getUniqueFileName $OUTPUT)

echo -e "// This JSON file is the output of gitLogToJSON shell script version $VERSION
// This file was created on $(date)
\nvar json = [" > $OUTPUT

#This function just resets everything back to 0 and should be called before starting to fill in a now node
function resetNodeParameters() 
{
	hashId=0
	parent=0
	authorDate=0
	authorName="N/A"
	commitDate=0
	modificationSum=0
	dirStat=0 
}

#This function saves a node into the JSON file and should be called after all the parameters of the current node are set
function saveNode() 
{
	if [[ $nodeCount > 0 ]] 
	then 
	      echo -en ", " >> $OUTPUT #node seperator
	fi 
	echo -en "{
\t\"id\": \"$hashId\",
\t\"name\": \"$authorName\",
\t\"data\": {
\t\t\"authorDate\": \"$authorDate\",
\t\t\"commitDate\": \"$commitDate\",
\t\t\"modificationSum\": \"$modificationSum\"
\t}" >> $OUTPUT
	
	local numOfParents=$(echo $parent | wc -w)
	(( modificationSum++ )) #just to avoid 0
	local weightOfThisEdge=$(echo "scale=1; l($modificationSum)" | bc -l)
	local weightOfThisEdge=$(( ${weightOfThisEdge%.*} + 1 ))
	if [[ $numOfParents > 0 ]] 
	then
		#include edges that connect this node to each parent
		echo -e ",\n\t\"adjacencies\": [" >> $OUTPUT
		for (( i = 1 ; i <= $numOfParents ; i++ )) 
		do
			local thisParent=$(echo $parent | cut --delimiter=" " -f $i)
			echo -e "\t{\n\t\t\"nodeTo\": \"$thisParent\"," >> $OUTPUT
			echo -e "\t\t\"data\": {" >> $OUTPUT
			echo -e "\t\t\t\"weight\": $weightOfThisEdge" >> $OUTPUT
			echo -en "\t\t}\n\t}" >> $OUTPUT
			if [[ $i < $numOfParents ]]
			then
				echo -e "," >> $OUTPUT
			else 
				echo -e "]" >> $OUTPUT
			fi
		done
	fi
	echo -en "}"

	(( nodeCount++ ))
	if [[ $(( $nodeCount % 10 )) = 0 ]]
	then
		printProgressBar
	fi
}

#This function simply prints a progress bar to indicate how much of the file has been written
function printProgressBar()
{
	local progressLength=20
	local outputString="\r["
	ratio=$(echo "scale=2; 1+$nodeCount*$progressLength/$numberOfCommits" | bc )
	for (( j = 0; j < $progressLength; j++ ))
	do 
		if [[ $(echo "$j < $ratio"|bc) -eq 1 ]]
		then
			outputString+="#"
		else
			outputString+="-"
		fi
	done
	outputString+="] Commit $(( $nodeCount + 1 )) of $numberOfCommits                        "
	echo -ne $outputString
}

# Commands to use:
# git log -10 --simplify-merges --date=short --pretty=format:"node: %h%nparents: %p%nad: %ad%ncd: %cd" --numstat --dirstat
# git log -10 --simplify-merges --date=short --pretty=format:"node: %h%nparents: %p%nad: %ad%ncd: %cd" --numstat
# git log -10 --simplify-merges --date=short --pretty=format:"node: %h%nparents: %p%nad: %ad%ncd: %cd%nan: %an" --numstat
#
echo -en "Loading git log output, this might take a while ..."
for line in $(git log -$numberOfCommits --simplify-merges --date=short --pretty=format:"node: %h%nparents: %p%nad: %ad%ncd: %cd%nan: %an" --numstat)
do
	if [[ "$line" =~ ^node:.* ]]
	then
		#encounter a new node
		if [[ $lineCount -ne 0 ]] 
		then 
		    saveNode
		fi
		resetNodeParameters
		hashId=$(echo $line | cut --delimiter=" " --fields=2 )
	elif [[ "$line" =~ ^parents:.* ]]
	then
		parent=$(echo $line | cut --delimiter=" " --fields=2- )
	elif [[ "$line" =~ ^ad:.* ]]
	then
		#add author date
		authorDate=$(echo $line | cut --delimiter=" " --fields=2 )
	elif [[ "$line" =~ ^an:.* ]]
	then
		#add author name
		authorName=$(echo $line | cut --delimiter=" " --fields=2 )
	elif [[ "$line" =~ ^cd:.* ]]
	then
		#add commit date
		commitDate=$(echo $line | cut --delimiter=" " --fields=2 )
	elif [[ "$line" =~ ^[0-9].* ]] 
	then
		#assume lines starting with a number are numstat lines
		deleted=$(echo "$line" | cut -f 1-1)
		inserted=$(echo "$line" | cut -f 2-2)
		file=$(echo "$line" | cut -f 3-3)
		let modificationSum+=$deleted+$inserted
	elif [[ "$line" =~ ^( .*) ]]
	then
		#assumes lines starting with space are dirstat lines
		dirStat+=$line
		#TO_DO: decide were the dirStat will go
	elif [[ "$line" =~ ^$ ]]
	then
		echo "there was a blank line at line $lineCount"
	else
		echo "UNDETECTED LINE!! Somthing is wrong at line $lineCount: $line"
	fi
	(( lineCount++ ))
done


echo -e "];\n//end" >> $OUTPUT
IFS="$oldIFS" #restoring the internal field seperator
finishTime=$(date +%s)
let totalSeconds=$finishTime-$startTime
let totalMinutes=$totalSeconds/60
printProgressBar
echo -e "\nFinished exporting $lineCount lines from git log output which contain $numberOfCommits commits to \"$OUTPUT\" in JSON format.
This took $totalMinutes minutes and $(( $totalSeconds % 60 )) seconds"
exit $?
