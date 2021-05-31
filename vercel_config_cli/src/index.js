const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const nodeExpress = require('./configs/nodeExpress');

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
      choices: ['node-express', 'static', 'react', 'vue', 'static-build', 'lambda'],
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
  }
  // after the config funciton for nodeExpress executes.
  console.log(config);
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
