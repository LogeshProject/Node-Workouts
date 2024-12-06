const express = require('express')

const app = express()

const port = 3000


app.get('/',(req,res)=>{

    res.send("Hello world...") // plain text, HTML , JSON         => render : rendering a template
})


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})