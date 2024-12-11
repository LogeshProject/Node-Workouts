const express = require('express');

const app = express()

const port = 3000 ;

const myMiddleware = (err , req , res , next)=>{

    console.log('middleware called....');
    next()
}

app.get('/' , (req , res)=>{

    res.send("Hello world.....")
})


app.use(myMiddleware);

app.listen(port , ()=>{
    console.log('server on running 3003')
})