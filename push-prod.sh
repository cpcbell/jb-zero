#!/bin/bash

s3cmd -c s3cfg_chatdog sync ./dist/jb-zero/ s3://chatdog.jupiterbase.com/
s3cmd -c s3cfg_chatdog setacl s3://chatdog.jupiterbase.com/ --acl-public --recursive 

