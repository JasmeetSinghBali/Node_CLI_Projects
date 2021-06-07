const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');

colors.setTheme({
  silly: 'rainbow',
  inp: 'grey',
  verbose: 'cyan',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
});

const apikey = {
  async set() {
    // using KeyManager Class lib method set via keyManager object
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'apikey',
        message: 'Enter API key'.inp + '-' + 'https://nomics.com'.underline.debug,
      },
    ]);
    const apikey = keyManager.setKey(input.apiKey);

    if (apikey) {
      console.log('API Key Set'.silly);
    }
  },
  show() {
    console.log('Show your API Key logic goes here');
  },
  remove() {
    console.log('Remove your API Key logic goes here');
  },
};

module.exports = apikey;
