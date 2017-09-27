# browserify-sa

Run `browserify-sa` in a npm package and make a standalone build of the package. 

## Requirements

You will need a global install of `browserify`. 

    sudo npm install browserify -g

## Install

    sudo npm install browserify-sa -g

## Usage

Just run the command in the module you would like to make, like this: 

    browserify-sa

Basicly a simple wrapper around browserify that does something like this: 

    mkdir -p dist && browserify moduleMain -s moduleName > dist/module-name.js

This makes a `dist/module-name.js` file based on the 'main' and 'name' fields in package.json

## Options

If you want another name for the the exposed variable name, you can specify: 

`-n` or `--name` the name of the export, the global variable exposed.

Uglify: 

`--uglify` or `-u` - will shorten and uglify the `dist` build. Uglify will not always work with e.g. `string literals`.

In order to use `uglify`, you will need `uglify.js` installed global. 

    sudo npm install -g uglify-js


MIT © [Dennis Iversen](https://github.com/diversen)
