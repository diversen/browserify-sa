#!/usr/bin/env node

var cwd = process.cwd()
var file = cwd + '/package.json'
var json = require(file);
var command = 'mkdir -p dist &&';

var m = require('minimist-mini')();

if (m.get('help') || m.get('h')) {
    m.helpMessage();
    process.exit()
}


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

// The name of the build
// Else it is just the package name
if (m.get('name')) {
    json.name = m.get('name')
}

if (m.get('n')) {
    json.name = m.get('n')
}

var infoStr = infoAry.join('. ')

command+= "(printf  '/* " +infoStr +"   */ '";
command+=' && browserify ' + json.main + '  -s ' + json.name;

if (m.get('uglify') || m.get('u')) {
    command+= ' |  uglifyjs';
}

command+= ') ';
command+= ' > dist/' + json.name;

if (m.get('uglify') || m.get('u')) {
    command+= '.min';
}


command+= '.js';

var exec = require('child_process').exec;

exec(command, function(error, stdout, stderr) {
    console.log(command);
    if (error)console.log(error);
    if (stderr)console.log(stderr);
});


