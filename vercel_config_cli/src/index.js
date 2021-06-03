#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// importing configs
const nodeExpress = require('./configs/nodeExpress');
const staticConfig = require('./configs/staticConfig');
const fef = require('./configs/fef'); // for react,static,static-builds

const vercelPath=path.join(process.cwd(),'vercel.json');
const existingConfig=fs.existsSync(vercelPath);

const existConfig = fs.existsSync('vercel.json');

// current project directory
// console.log(process.cwd());

async function buildConfig() {
  let config = {
    version: 2,
  };
  const answers = await inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is the name of the project?',
      default: path.basename(process.cwd()),
    },
    {
      type: 'list',
      choices: ['node-express', 'static', 'react', 'vue', 'static-build'],
      name: 'type',
      message: 'What type of project?',
    },
  ]);
  config.name = answers.name;
  switch (answers.type) {
    case 'node-express':
      // calls nodeExpress and spreads baseConfig and config
      config = await nodeExpress(config);
      break;

    case 'static':
      config = await staticConfig(config);
      break;

    case 'react':
      config = await fef(config,'build');
      break;

    case 'vue':
      config = await fef(config);
      break;

    case 'static-build':
      config = await fef(config);
      break;

    default:
      break;
  }
  // after the config funciton for nodeExpress executes.
  //console.log(config);
  fs.writeFileSync(vercelPath,JSON.stringify(config,null,2),'utf8');
  console.log('All done! check vercel.json for further configs or type vercel to deploy!');
  process.exit(0);
}

if (existConfig) {
  inquirer.prompt({

    type: 'confirm',
    name: 'overwrite',
    message: 'vercel.json already exists! Would you like to overwrite it?',
    default: false,

  })
    .then((answers) => {
      if (answers.overwrite) {
        buildConfig();
      } else {
        console.log('Goodbye...');
      }
    });
} else {
  buildConfig();
}
