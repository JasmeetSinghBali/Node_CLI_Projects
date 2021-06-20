#! /usr/bin/env node

// spawn child process logger
(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

global.opsys=process.platform;
console.log(process.cwd());
console.log('=============');
console.log(process.argv[2]);
const colors = require('colors');
const { spawn } = require('child_process');
const fs = require('fs');

colors.setTheme({
  silly: 'rainbow',
  inp: 'grey',
  verbose: 'cyan',
  info: 'green',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
});

const name = process.argv[2];

if (!name || name.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
  return console.log('Invalid directory name.\n'.error + 'Usage: create-myexpress-api name-of-your-app'.help);
}

const repoURL= 'https://github.com/Jasmeet-1998/create-full-api-boilerplate.git';

runCommand('git', ['clone', repoURL, name])
  .then(() => {
    // to remove the .git file from the project
    if(opsys=="win32" || opsys == "win64"){
      // windows
      console.log('Windows operating system detected'.warn);
      dir=process.cwd()+`${name}/.git`;
      fs.rmdir(dir,{recursive:true},(err)=>{
        if(err){
          throw err;
        }
        console.log('${dir} was deleted!'.verbose);
      });

    }
    else{
      // bash linux
      return runCommand('rm', ['-rf', `${name}/.git`]);
    }
  }).then(() => {
    console.log('Installing dependencies...'.help);

    return runCommand('npm', ['install'],{
      cwd: process.cwd() + '/' + name}
    );
  }).then(() => {
    console.log('All Done!'.silly);
    console.log('');
    console.log('To get started:'.help);
    console.log('cd'.help, name);
    console.log('npm run dev'.help);
  });


function runCommand(command,args,options=undefined){
  const spawned = spawn(command, args, options);
  return new Promise((resolve)=>{
    spawned.stdout.on('data',(data)=>{
      console.log(data.toString().info);
    });

    spawned.stderr.on('data',(data)=>{
      console.error(data.toString().error);
    });

    spawned.on('close',()=>{
      resolve();
    });
  });
}
