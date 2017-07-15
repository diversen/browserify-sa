# browserify-sa

Run `browserify-sa` in a npm package and make a standalone build of the package. 

## Requirements

You will need a global install of `browserify`. 

## Usage

Just run the command in the module you would like to make, like this: 

    browserify-sa

Basicly a simple wrapper around browserify that does something like this: 

    mkdir -p dist && browserify moduleMain -s moduleName > dist/moduleName.js

This makes a dist/moduleName.js file based on 'main' and 'name' in package.json

## Options

Only option is `uglify` - which will uglify the `dist` build. Uglify will
not always work with e.g. `string literals`. Therefor it is needed to 
specify it:

    browserify-sa --uglify

In order to use `uglify`, you will need `uglify.js` installed global. 

MIT © [Dennis Iversen](https://github.com/diversen)
