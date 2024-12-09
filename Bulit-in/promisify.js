// util modules - part of core modules , without install the package , debugging and formmating

// promisify - converts a callback-based function into promise-based function


const util = require('util')
const path = require('path')
const fs = require('fs')

const readFile = util.promisify(fs.readFile)


const operation = async ()=>{

    const data = await readFile(path.join(__dirname , 'files' , 'sample.txt') , 'utf-8')
    console.log(data)
      
}


operation()

