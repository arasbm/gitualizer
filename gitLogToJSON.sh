#!/bin/bash
# gitLogToJSON.sh This script converts output of a git-log command to JSON format to prepare it for visualization. 
# Vesion 0.1
# Author: Aras Balali Moghaddam

VERSION=0.1
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

OUTPUT=$(getUniqueFileName "$1")

echo -e "// This JSON file is the output of gitLogToJSON shell script version $VERSION
// This file was created on $(date)
\nvar json = [" > $OUTPUT

oldIFS=$IFS # save the field separator  
IFS=$'\n' # new field separator, the end of line 
numberOfCommits=12
lineCount=0 #keeps count of number of lines parsed from git log output
nodeCount=0 #number of nodes parsed into JSON file

#Here are the variables to cunstruct and store a node in the JSON file:
hashId=0
parent=0
authorDate=0
commitDate=0
modificationSum=0 #keeps track of how much is modified in each commit
dirStat=0 #this is a 2D array in the format: N% DIR_NAME N% DIR_NAME ...

#This function just resets everything back to 0 and should be called before starting to fill in a now node
function resetNodeParameters() 
{
	hashId=0
	parent=0
	authorDate=0
	commitDate=0
	modificationSum=0
	dirStat=0 
}

#This function saves a node into the JSON file and should be called after all the parameters of the current node are set
function saveNode() 
{
	if [[ $nodeCount > 0 ]] 
	then 
	      echo -e "," >> $OUTPUT #node seperator
	fi 
	echo -e "{
\t\"id\": \"$hashId\",
\t\"authorDate\": \"$authorDate\",
\t\"commitDate\": \"$commitDate\",
\t\"modificationSum\": \"$modificationSum\",
\t\"adjacencies\": [{" >> $OUTPUT
	
	local numOfParents=$(echo $parent | wc -w)
	if [[ $numOfParents > 1 ]] 
	then
	      for (( i = 1 ; i < $numOfParents ; i++ )) 
	      do
		  local thisParent=$(echo $parent | cut --delimiter=" " -f $i)
		  echo -e "\t\t\"nodeTo\": $thisParent," >> $OUTPUT
	      done
	fi
	local thisParent=$(echo $parent | cut --delimiter=" " -f $numOfParents)
	echo -e "\t\t\"nodeTo\": $thisParent" >> $OUTPUT
	echo -e "\t}]\n}" >> $OUTPUT
	(( nodeCount++ ))
}

# Commands to use:
# git log -10 --simplify-merges --date=short --pretty=format:"node: %h%nparents: %p%nad: %ad%ncd: %cd" --numstat --dirstat
# git log -10 --simplify-merges --date=short --pretty=format:"node: %h%nparents: %p%nad: %ad%ncd: %cd" --numstat
#
for line in $(git log -$numberOfCommits --simplify-merges --date=short --pretty=format:"node: %h%nparents: %p%nad: %ad%ncd: %cd" --numstat)
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
	echo -ne "\r $(( $nodeCount + 1 )). out of $numberOfCommits"
done
echo -e "];\n//end" >> $OUTPUT
IFS="$oldIFS" #restoring the internal field seperator
finishTime=$(date +%s)
let totalSeconds=$finishTime-$startTime
let totalMinutes=$totalSeconds/60
echo -e "\nFinished exporting $lineCount lines from git log output to $OUTPUT, in JSON format.
This took $totalMinutes minutes and $(( $totalSeconds % 60 )) seconds"
exit $?
