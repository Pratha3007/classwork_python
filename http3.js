http=require("http")
// http.createServer((req,res)=>{
//     setTimeout(()=>{
//         res.write('\nHello')
//         res.end()
//     },5000)
// }).listen(5006)

// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"})
//     res.write(`<html>
//                 <head></head>
//                 <body>
//                 <p id='p1'></p>
//                 <script>
//                     setTimeout(()=>{
//                         document.getElementById('p1').innerHTML='Hello world'
//                     },5000)
//                 </script>
//                 </body>
//                 </html>`)
//     res.end()
// }).listen(5006)

// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"})
//     if(req.url==="/"){
//         res.write(`<html>
//                     <head>
//                     </head>
//                     <body>
//                         <div class='nav'>
//                             <a href='home' ,style='color:green'>Home</a>
//                             <a href='about'>About</a>
//                             <a href='contact'>Contact</a>
//                         </div>
//                     </body>
//                     </html>`)
//         res.end()
//     }
//     else if(req.url==="/home"){
//         res.write("Home Page")
//         res.end()
//     }
//     else if(req.url==="/about"){
//         res.write("ABout Page")
//         res.end()
//     }
//     else if(req.url==="/contact"){
//         res.write("Contact Page")
//         res.end()
//     }
//     else{
//         res.write("No such page ! ")
//         res.end()
//     }
// }).listen(5006)


//Create HTTP webpage on which home page will fetch json data, about page shows centrally aligned message “Hello from class” in red color and cyan background using internal css styling. And any other page shows “404 error”. (Render Response & Routing) 

http.createServer((req,res)=>{
    data=[{"name":"Rohit","runs":52}]
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify(data))
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(`<html>
                <head>
                    <style>
                        #p1{
                            color:red
                            background-color:cyan
                        }
                    </style>
                </head>
                    <body>
                        <p id='p1'>Hello from class</p>
                    </body>
                </html>`)
                res.end()
    }
    else{
        res.write("404 error")
        res.end()
    }

}).listen(5006)