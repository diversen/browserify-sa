#!/usr/bin/env node

var cwd = process.cwd()
var file = cwd + '/package.json'
var json = require(file);
var command = 'mkdir -p dist && browserify ' + json.main + '  -s ' + json.name + ' |  uglifyjs  > dist/' + json.name + '.js';

var exec = require('child_process').exec;

exec(command, function(error, stdout, stderr) {
    console.log(command);
    if (error)console.log(error);
    if (stderr)console.log(stderr);
});


