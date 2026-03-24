fs=require("fs")
const http=require("http")
// let server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"application/json"})
//     var data=[{"name":"Rohit","runs":52}]
//     res.end(JSON.stringify(data))
// })
// server.listen(6008)


// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"})
//     res.write(req.url+"<br>")
//     res.end("Url ended")
// }).listen(3006)


// http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write("<h1>Heloolo</h1>")
//         res.end()
//     }
//     else if(req.url==="/about"){
//         res.writeHead(200,{"content-type":"text/plain"})
//         res.write("<h1>About Page</h1>")
//         res.end()
//     }
//     else{
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end("page not Found")
//     }
// }).listen(3007)


// http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write("<h1>Heloolo</h1><img src='virat.png'/>"")
//         res.end()
//     }
//     else if(req.url==="/logo.png"){
//         data=fs.readFileSync("virat.png")
//         res.writeHead(200,{"content-type":"image/png"})
//         res.end(data)
//     }
//     else{
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end("page not Found")
//     }
// }).listen(3007)



// http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end()
//     }
//     else if(req.url==="/hello.html"){
//         res.writeHead(200,{"content-type":"text/html"})
//         data=fs.readFileSync("hello.html")
//         res.end(data)
//     }
//     else{
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end("page not Found")
//     }
// }).listen(3007)



// Write node js script to perform tasks as asked.
// 1)      Create one page with two links (Home(/) and about(/about)).
// 2)      Both pages must contain HTML type content and add required content on both the pages.
// 3)      If user add any other URL path, then he/she will be redirected to page and plain message will be displayed of “Page not found”.

// http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end()
//     }
//     else if(req.url==="/home"){
//         res.writeHead(200,{"content-type":"text/html"})
//         data=fs.readFileSync("hello.html")
//         res.end(data)
//     }
//     else if(req.url==="/about"){
//         res.writeHead(200,{"content-type":"text/html"})
//         data=fs.readFileSync("hello1.html")
//         res.end(data)
//     }
//     else{
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end("page not Found")
//     }
// }).listen(3007)



// Create http webpage and display message “Welcome to Priyen sir's class” in h1 tag after 10 seconds. 

http.createServer((req,res)=>{
    setTimeout(()=>{
        res.writeHead(200,{"content-type":"text/html"})
        res.write("Welcome to Priyen sir's class")
        res.end()
    },10000)
}).listen(3007)

