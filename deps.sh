#!/bin/bash
npm install --save-dev prettier
node --eval "fs.writeFileSync('.prettierrc', '{}\n')"
npm install --save-dev eslint @eslint/js
touch eslint.config.js 
npm install --save-dev eslint-config-prettier
npm install @babel/core @babel/cli @babel/preset-react --save-dev
npm install webpack webpack-cli @babel/core babel-loader @babel/preset-react --save-dev
npm install @minify-html/node --save-dev
npm install html-minimizer-webpack-plugin --save-dev
npm install --save-dev style-loader
npm install toml yamljs json5 --save-dev