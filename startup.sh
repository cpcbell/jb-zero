#!/bin/bash

# Program to dev angular6 

# Usage: startup.sh

# Create a temporary file name that gives preference
# to the user's local tmp directory and has a name
# that is resistant to "temp race attacks"

if [ -d "~/tmp" ]; then
	TEMP_DIR=~/tmp
else
	TEMP_DIR=/tmp
fi
TEMP_FILE=$TEMP_DIR/angular6.$$.$RANDOM
PROGNAME=$(basename $0)

usage() {

	# Display usage message on standard error
	echo "Usage: $PROGNAME file" 1>&2
}

clean_up() {

	# Perform program exit housekeeping
	# Optionally accepts an exit status
	rm -f $TEMP_FILE
	exit $1
}

error_exit() {

	# Display error message and exit
	echo "${PROGNAME}: ${1:-"Unknown Error"}" 1>&2
	clean_up 1
}

trap clean_up SIGHUP SIGINT SIGTERM

#if [ $# != "1" ]; then
#	usage
#	error_exit "one file to print must be specified"
#fi
#if [ ! -f "$1" ]; then
#	error_exit "file $1 cannot be read"
#fi

#pr $1 > $TEMP_FILE || error_exit "cannot format file"
source ~/.bash_profile 
#json-server --watch json/jb.json > $TEMP_FILE 2>&1  &
#ng serve --hmr --configuration=hmr > $TEMP_FILE 2>&1 &
ng serve > $TEMP_FILE 2>&1 &
tail -f $TEMP_FILE 

#echo -n "Print file? [y/n]: "
#read
#if [ "$REPLY" = "y" ]; then
#	lpr $TEMP_FILE || error_exit "cannot angular6"
#fi

clean_up
