# browserify-sa

Run browserify-sa in a npm package and make a standalone build of the package. 

Basicly a simple wrapper around browserify that does something like this: 

    mkdir -p dist && browserify moduleMain -s moduleName > dist/moduleName.js

This makes a dist/moduleName.js file based on 'main' and 'name' in package.json

MIT © [Dennis Iversen](https://github.com/diversen)
