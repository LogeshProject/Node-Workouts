const express = require('express');

const app = express()

const port = 3000 ;

// query 

// app.get('/home' , (req ,res)=>{

//     let a = parseInt(req.query.a) ;
//     let b = parseInt(req.query.b) ;
   

//     res.json(a+b)

// })




// params 


app.get('/home/:id' , (req ,res)=>{

    let a = req.params.id ;

    res.send(a)
})

app.listen(port , ()=>{
    console.log(`server running on http://localhost:${port}`)
})