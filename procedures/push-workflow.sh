#!/bin/bash

push_workflow(){
    git status
    git add .
    git commit -m'$1'
    git push origin master
}

push_workflow