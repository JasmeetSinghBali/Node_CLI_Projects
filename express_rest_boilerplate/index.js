#! /usr/bin/env node

// spawn child process logger
(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('LOG: spawn called'.cyan);
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

global.opsys=process.platform;
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
      console.log('---------Spawn Logs Ends Here-------'.help);
      console.log('');
      console.log('Windows operating system detected'.warn);
      console.log('');
      console.log('================ TO GET STARTED ==================='.silly);
      console.log('');
      console.log(`NOTE:`);
      console.log('');
      console.log(`1.) Make Sure you edit .env.sample file in '${name}' directory and change its extension from .env.sample to .env then run below commands from the '${name}' directory.`.verbose);
      console.log('');
      console.log(`2.) Delete '.git' inside your '${name}' directory before pushing changes to your git repo.`.verbose);
      console.log('');
      console.log(`cd ${name}`.info);
      console.log('npm install'.info);
      console.log('npm run dev'.info);
      console.log('');
      console.log(`For more details regarding api boilerplate structure refer ReadMe.md in '${name}'`.info);
      console.log('');
      console.log('Enjoy!!'.silly);
      process.exit();
    }
    else if(opsys=="linux"){
      // bash linux
      console.log('Linux Detected'.warn);
      return runCommand('rm', ['-rf', `${name}/.git`]);
    }
  }).then(() => {
    console.log('Cloning DONE'.help);
    console.log('');
    console.log('Installing dependencies...'.help);

    return runCommand('npm', ['install'],{
      cwd: process.cwd() + '/' + name}
    );
  }).then(() => {
    console.log('---------Spawn Logs Ends Here-------'.help);
    console.log('');
    console.log('================ TO GET STARTED ==================='.silly);
    console.log('');
    console.log(`NOTE:`);
    console.log('');
    console.log(`Make Sure you edit .env.sample file in '${name}' directory and change its extension from .env.sample to .env then run below commands from the '${name}' directory.`.verbose);
    console.log('');
    console.log(`cd ${name}`.info);
    console.log('npm install'.info);
    console.log('npm run dev'.info);
    console.log('');
    console.log(`For more details regarding api boilerplate structure refer ReadMe.md in '${name}'`.info);
    console.log('');
    console.log('Enjoy!!'.silly);
  });


function runCommand(command,args,options=undefined){
  const spawned = spawn(command, args, options);
  return new Promise((resolve)=>{
    spawned.stdout.on('data',(data)=>{
      console.log(data.toString().info);
    });

    spawned.stderr.on('data',(data)=>{
      console.error(data.toString().warn);
    });

    spawned.on('close',()=>{
      resolve();
    });
  });
}
