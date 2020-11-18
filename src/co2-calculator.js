var arguments = require('yargs').argv;

const Output = require('./output');
let equivalent = Output.getCo2Equivalent(arguments);

console.log(`Your trip caused ${equivalent} of CO2-equivalent.`);