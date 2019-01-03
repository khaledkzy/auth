const monk = require('monk');
const db = monk('localhost/authjan');

module.exports = db;