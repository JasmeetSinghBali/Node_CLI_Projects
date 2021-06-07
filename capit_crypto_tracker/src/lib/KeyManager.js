const Configstore = require('configstore');
const pkg = require('../../package.json');

class KeyManager{
  constructor(){
    this.conf=new Configstore(pkg.name);
  }

  // method for setting the api key
  setKey(key){
    this.conf.set('apiKey',key);
    return key;
  }

  // method for getting the key
  getKey(){
    const key=this.conf.get('apiKey');

    if(!key){
      throw new Error('No API Key Found - Get your API key at https://nomics.com');
    }
    return key;
  }

  // method to remove API Key
  deleteKey(){
    const key=this.conf.get('apiKey');

    if(!key){
      throw new Error('No API Key Found - Get your API key at https://nomics.com');
    }

    this.conf.delete('apiKey');

    return 'API Key Removed Successfully';
  }
}

module.exports=KeyManager;
