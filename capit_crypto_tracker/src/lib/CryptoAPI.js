const axios = require('axios');
// eslint-disable-next-line
const colors = require('colors');

// custom error handler
function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error('Your API Key is invalid - Go to https://nomics.com'.red);
  } else if (err.response.status === 404) {
    throw new Error('API Server Not Responding'.red);
  } else if (err.response.status === 429) {
    throw new Error('API Request Limit Exceeded for more info - Go to https://nomics.com'.yellow);
  } else {
    throw new Error('Unknown Error Occured'.red);
  }
}

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1';
  }
  // eslint-disable-next-line
  async getPriceData(coinOption, curOption) {
    try {
      // formatting api data
      const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: curOption,
      });

      const res = await axios.get(
        `${this.baseUrl}/currencies/ticker?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`,
      );

      let formattedRes = '';
      res.data.forEach((coin) => {
        formattedRes += `Coin: ${coin.symbol.cyan} (${coin.name}) | Date: ${coin.price_date.cyan} | Rank: ${coin.rank.green} | Price: ${formatter.format(coin.price).green} | MarketCap: ${formatter.format(coin.market_cap).green}\n`.yellow;
      });

      return formattedRes;
    } catch (err) {
      handleAPIError(err);
    }
  }
}
module.exports = CryptoAPI;
