#!/bin/bash
# gitLogToJSON.sh This script converts output of git-log to JSON format to prepare it for visualization. 
#Vesion 0
#Author: Aras Balali Moghaddam

OUTPUT=json.txt
lastFileNumber=0;
while [[ -e $OUTPUT ]]
do
	OUTPUT="json$lastFileNumber.txt"
	lastFileNumber+=1
done

echo -e "var json = [{\n" > $OUTPUT
oldIFS=$IFS # save the field separator  
IFS=$'\n' # new field separator, the end of line 
modification_sum=0 #keeps track of how much is modified in each commit
for line in $(git log -10 --simplify-merges --date=short --pretty=format:"node: %h%nparents: %p%nad: %ad%ncd: %cd" --numstat --dirstat)
do
	if [[ "$line" =~ ^node:.* ]]
	then
		modification_sum=0 
		hashId=$(echo $line | cut -f 2-2)
		echo "\"id\": \"$hashId\"" >> $OUTPUT
	elif [[ "$line" =~ ^parents:.* ]]
	then
		echo "parent >> $line" >> $OUTPUT
		#iterate through parents and add the edges between the node and its parents
	elif [[ "$line" =~ ^ad:.* ]]
	then
		#add author date
		echo "Author date: $line" >> $OUTPUT
	elif [[ "$line" =~ ^cd:.* ]]
	then
		#add commit date
		echo "commit day: $line" >> $OUTPUT
	elif [[ "$line" =~ ^[0-9].* ]] 
	then
		#assume lines starting with a number are numstat lines
		deleted=$(echo "$line" | cut -f 1-1)
		inserted=$(echo "$line" | cut -f 2-2)
		file=$(echo "$line" | cut -f 3-3)
		fileSum=$(( $deleted+$inserted ))
		echo "Sum of the contributions to $file is $fileSum" >> $OUTPUT
	elif [[ "$line" =~ ^( .*) ]]
	then
		#assumes lines starting with space are dirstat lines
		echo "dirstat >> $line"  >> $OUTPUT
	elif [[ "$line" =~ ^$ ]]
	then
		echo "this was a blank line[$line]"  >> $OUTPUT
	else
		echo "UNDETECTED LINE !!!!! Somthing is wrong here: $line" >> $OUTPUT
	fi
done
echo "}" >> $OUTPUT
IFS="$oldIFS" #restoring the internal field seperator
echo "Finished exporting the commit information to $OUTPUT "
exit $?
