const program = require('commander');
const apikey = require('../commands/apikey');

// set api key
program.command('set')
  .description('Set API Key --Get at https://nomics.com')
  .action(
    apikey.set,
  );

// show api key
program.command('show')
  .description('Show API Key')
  .action(
    apikey.show,
  );

program.command('remove')
  .description('Remove API Key')
  .action(
    apikey.remove,
  );

program.parse(process.argv);
