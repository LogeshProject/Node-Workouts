const express = require('express');

const app = express()

const port = 3003 ;


app.get('/' , (req , res)=>{

    res.send("Hello world.....")
})


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  

app.listen(port , ()=>{
    console.log('server on running 3003')
})