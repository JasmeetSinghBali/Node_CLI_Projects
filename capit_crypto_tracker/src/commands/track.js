// eslint-disable-next-line
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

colors.setTheme({
  silly: 'rainbow',
  verbose: 'cyan',
  info: 'green',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
});

const track = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputData);
    } catch (err) {
      console.error(err.message.error);
    }
  },
};

module.exports = track;
