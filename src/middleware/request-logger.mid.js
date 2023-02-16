const fs = require('fs');
const morgan = require('morgan');

const accessLogStream = fs.createWriteStream(`${__dirname}/../../access.log`, { flags: 'a' });
const logger = morgan('combined', { stream: accessLogStream });

module.exports = logger;
