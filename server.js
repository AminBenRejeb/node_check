const http = require ("http")
const server = http.createServer((req,res)=>{
    res.write("<h1>Hello Node</h1>\n")
    res.end()
})
const port = 3000
server.listen(port,()=>{
    console.log("server running successfully!")
})

