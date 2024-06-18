#!/bin/bash

push_workflow(){
    git status
    git add .
    git commit -m'feat/standard'
    git push origin master
}

push_workflow