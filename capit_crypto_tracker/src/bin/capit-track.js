const program = require('commander');
const track = require('../commands/track');

program.command('price')
  .description('Track price of coins')
  .option(
    '--coin <type>',
    'Add specific coin types in CSV format',
    'BTC,ETH,XRP',
  )
  .option(
    '--cur <currency>',
    'Change the currency',
    'INR',
  )
  .action((cmd) => track.price(cmd));

program.parse(process.argv);
