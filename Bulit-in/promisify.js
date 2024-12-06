const util = require('util');
const fs = require('fs');
const path = require('path')
const readFile = util.promisify(fs.readFile);

(async () => {
  try {
    const data = await readFile(path.join(__dirname , 'sample.txt') , 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();


// util modules - part of core modules , without install the package , debugging and formmating

// promisify - converts a callback-based function into promise-based function