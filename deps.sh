#!/bin/bash
npm install --save-dev prettier
node --eval "fs.writeFileSync('.prettierrc', '{}\n')"
npm install --save-dev eslint @eslint/js
touch eslint.config.js 
npm install --save-dev eslint-config-prettier