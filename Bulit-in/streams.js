const fs = require('fs')

const path = require('path')


const rs = fs.createReadStream(path.join(__dirname , 'file.txt'))

const ws = fs.createWriteStream(path.join(__dirname, 'file2.txt'))

rs.pipe(ws)