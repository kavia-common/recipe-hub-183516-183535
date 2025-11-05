#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-hub-183516-183535/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

