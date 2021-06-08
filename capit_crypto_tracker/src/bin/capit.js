#! /usr/bin/env node
const program = require('commander');
const pkg = require('../../package.json');

// process.argv contains the argument we pass in
// console.log(process.argv)

program.version(pkg.version)
  .command('apikey', 'Manages API Key --https://nomics.com')
  .command('track', 'Track Coin Price Info')
  .parse(process.argv);
