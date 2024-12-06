const http = require('http')

const port  = 3000 ;

const server = http.createServer((req, res)=>{

    res.statusCode = 200

    if(req.url === '/'){
        res.end('Home Page')
    }else{
        res.statusCode = 404
        res.end('404 not found ')
    }
})


server.listen(port , ()=>{
    console.log('server running on port')
})
