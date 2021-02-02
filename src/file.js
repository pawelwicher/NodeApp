exports.getFileContent = getFileContent;
const fs = require('fs');
const path = require('path');
const util = require('util');

function getFileContent(filename = path.join(__dirname, '..', 'data/foo.txt')) {
  // return new Promise((resolve, reject) => fs.readFile(filename, (err, data) => err ? reject(err) : resolve(data)));
  return util.promisify(fs.readFile)(filename);
}
