const http =  require('http')

const port = 3000 ;

const server = http.createServer((req , res)=>{

    if(req.url === '/'){
        res.end('Hello world...')
    }else{
        res.statusCode = 404
        res.end('404-Not found')
    }
})


server.listen(port , ()=>{
    console.log('Server Running on 3000')
})