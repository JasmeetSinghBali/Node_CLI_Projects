// eslint-disable-next-line
const colors = require('colors');
const isRequired = (input) => (input === '' ? 'This Value is required'.yellow : true);

module.exports = { isRequired };
