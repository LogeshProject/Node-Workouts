const express = require('express')

const app = express()

const port = 3000 ;


// Query 

// app.get('/home' , (req,res)=>{

//     const a = parseInt(req.query.a) ;
//     const b = parseInt(req.query.b) ;

//     res.json(a+b)
// })



app.get('/home/:id' , (req, res)=>{

    const a = req.params.id

    res.json(a)
})



app.listen(port , ()=>{
    console.log('Running on 3000')
})
