#!/usr/bin/env node

var cwd = process.cwd()
var file = cwd + '/package.json'
var json = require(file);
var command = 'mkdir -p dist &&';

var infoAry = new Array();
infoAry.push("Package: " + json.name);
infoAry.push("Version: " + json.version);
if (json.license) {
    infoAry.push("License: " + json.license);
}

if (json.author) {
    infoAry.push( "Author: " + json.author);
}

if (json.homepage) {
    infoAry.push( "Homepage: " + json.homepage);
}

var infoStr = infoAry.join('. ')

command+= "(printf  '/*" +infoStr +"   */ '";
command+=' && browserify ' + json.main + '  -s ' + json.name;
command+= ' |  uglifyjs ) ' 
command+= ' > dist/' + json.name + '.js';

var exec = require('child_process').exec;

exec(command, function(error, stdout, stderr) {
    console.log(command);
    if (error)console.log(error);
    if (stderr)console.log(stderr);
});


