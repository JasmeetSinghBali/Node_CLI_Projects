> ## CAPIT (crypto currency api tracker)


> ### Usage
> #### Node-CLI tool to fetch cryptocurrency rates via nomics api
>#### API :  https://nomics.com/  

****make sure to make the symbolic link via 'npm link' if 'capit' command is not recoganized in the terminal****

> ### Commands capit [options] [command]
- capit apikey set (To add API key)
- capit apikey show (To See your API Key)
- capit apikey remove (To remove your API Key)
- capit track price (to track prices of different cryptocoins)
- capit apikey price --cur=YEN --coin=BTC,ETH (additional flags for custom data mentioning currency type and comma seperated coin symbols)


> ### Core dependencies
- [x] API docs nomics-https://nomics.com/docs/#tag/Currencies
- [x] Commander.js
- [x] inquirer
- [x] configstore
- [x] axios
- [x] colors

> ### Future Developments
- [ ] generate a graph with the fetched data and show the graph in the console.
- [ ] work on other endpoints of the api
- [ ] make the error handler more robust by looking in to the docs of nomics.
