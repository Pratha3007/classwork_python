const http=require("http")
let server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/HTML"})
    res.write("Hiii")
    res.write("<h1>Hello</h1>")
    res.end("How are you")
})
server.listen(6008,()=>{
    console.log('connected')
})
