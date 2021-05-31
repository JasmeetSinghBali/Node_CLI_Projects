const path = require('path');
const inquirer = require('inquirer');

const baseConfig = {

  builds: [
    {
      src: 'src/index.js',
      use: '@vercel/node-server',
    },
  ],
  rewrites: [
    {
      source: '/.*',
      destination: 'src/index.js',
    },
  ],
};

// combines the config and the baseConfig properties.
// asks additional question like to set the project root as main mentioned in the package.json
async function nodeExpress(config) {
  let mainFile = 'src/index.js';
  // eslint-disable-next-line
  // try to avoid breaking of the tool of the user do not have package.json in their project directory thats why it is required in the middle
  try {
    // eslint-disable-next-line
    const packageJSON = require(path.join(process.cwd(), 'package.json'));
    mainFile = packageJSON.main;
    // eslint-disable-next-line
  } catch (error) { }
  const answers = await inquirer.prompt([
    {
      type: 'text',
      name: 'main',
      message: 'What is the path to your express entry point?',
      default: mainFile,
    },
  ]);

  // change the src and dest a/c to the user.
  baseConfig.builds[0].src = answers.main;
  baseConfig.rewrites[0].destination = answers.main;
  // console.log(answers);
  return {
    ...config,
    ...baseConfig,
  };
}

module.exports = nodeExpress;
