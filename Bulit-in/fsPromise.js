const fspromise = require('fs').promises ;

const path = require('path')


const operation = async ()=>{

    const data = await fspromise.readFile(path.join(__dirname , 'files' , 'start.txt') , 'utf-8');

    console.log(data)

    fspromise.writeFile(path.join(__dirname , 'files' , 'end.txt' ) , 'Written on end file')
    console.log('file written .....')

    fspromise.appendFile(path.join(__dirname , 'files' , 'end.txt') , '\n Append write completed...')
    console.log('Append file....')

    fspromise.rename(path.join(__dirname , 'files' , 'demo.txt') , path.join(__dirname , 'files' , 'sample.txt'))
    console.log('renamed file')

    fspromise.unlink(path.join(__dirname , 'files' , 'delete.txt'))
    console.log('file deleted ')
}

operation()