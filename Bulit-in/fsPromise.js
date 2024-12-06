
const fsPromises = require('fs').promises

const path = require('path')


const operation = async ()=>{

    try{

        const data = await fsPromises.readFile(path.join(__dirname,'files','listen.txt'),'utf8')

        console.log(data)

        await fsPromises.writeFile(path.join(__dirname,'files','start.txt'),'Hi hello javascript.')
        console.log("Write Completed...")

        await fsPromises.appendFile(path.join(__dirname,'files','end.txt'),'\nHi i am Logesh.')
        console.log("Append Completed...")

        await fsPromises.rename(path.join(__dirname,'files','auto.txt'),path.join(__dirname,'files','bike.txt'))
        console.log("Rename Completed...")

        await fsPromises.unlink(path.join(__dirname,'files','start.txt'))
        console.log("Deleted Completed...")

    }catch(err){
        console.error(err)
    }
}

operation()