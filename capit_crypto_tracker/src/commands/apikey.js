const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');

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

const apikey = {
  async set() {
    try {
      // using KeyManager Class lib method set via keyManager object
      const keyManager = new KeyManager();
      const input = await inquirer.prompt([
        {
          type: 'password',
          name: 'key',
          message: `${'Enter API key'.verbose} - ${'https://nomics.com'.underline.debug}`,
          validate: isRequired,
        },
      ]);
      const key = keyManager.setKey(input.key);

      if (key) {
        console.log('API Key Set'.silly);
        return;
      }
    } catch (err) {
      console.error(err.message.error);
    }
  },
  // eslint-disable-next-line
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log('Current API KEY: '.verbose, key.info);
      return key;
    } catch (err) {
      console.error(err.message.error);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log('API Key was removed: '.debug);
      return;
    } catch (err) {
      console.error(err.message.error);
    }
  },
};

module.exports = apikey;
