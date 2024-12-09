const fs = require('fs')

const path = require('path')

const rs = fs.createReadStream(path.join(__dirname , 'files' , 'sample.txt'))
const ws = fs.createWriteStream(path.join(__dirname , 'files' , 'sample2.txt'))

rs.pipe(ws)