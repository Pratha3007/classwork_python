var u=require("url")
fs=require("fs")
 http=require("http")
// addr="https://localhost:8006/login.html"
// process.noDeprecation=true
// q=u.parse(addr,true)
// //console.log(q)
// path=q.pathname.split('/').pop()
// http.createServer((req,res)=>{
//     if(req.url==="/login"){
//         // res.writeHead(200,{"content-type":"text/html"})
//         data=fs.readFileSync("login.html")
//         res.write(data)
//         res.end()
//     }
//     else{
//         res.write("No file")
//         res.end()
//     }
// }).listen(5006)

// Write node.js script to print “Welcome to Home Page” with two links containing two pages named as “About Us” and “Contact Us” on home page of server. If user request for About Us page it should display “Welcome to LJ University” in bold font-style with blue color and if user request for Contact Us page it should display “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if any other request is requested it shows “Page not found” message in plaintext.

// http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write(`<html>
//                 <head>
//                     <style>

//                     </style>
//                 <head>
//                 <body>
//                     <p id='p1'>Welcome to Home Page</p>
//                     <a href='about'/>About Us</a>
//                     <a href='contact'>Contact Us</a>
//                 </body>
//                     </html>`)

//     }
//     else if(req.url==="/about"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write(`<html>
//                 <head>
//                     <style>
//                         #p1{
//                             font-weight:bold;
//                             color:blue;
//                         }
//                     </style>
//                 <head>
//                 <body>
//                     <p id='p1'>Welcome to LJ University</p>
//                 </body>
//                 </html>`)
//         res.end()
//     }
//     else if(req.url==="/contact"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write(`<html>
//                 <head>
//                     <style>
//                         #p1{
//                             font-style:italic;
//                             color:red;
//                         }
//                     </style>
//                 <head>
//                 <body>
//                     <p id='p1'>Email:abc@ljinstitutes.edu.in</p>
//                 </body>
//                 </html>`)
//         res.end()
//     }
//     else{
//         res.write("Page not found !")
//         res.end()
//     }
// }).listen(5006)


// const url1="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
// process.noDeprecation=true
// const q=u.parse(url1,true)
// console.log(q.pathname)
// const c1=q.query.c1
// const c2=q.query.c2
// const c3=q.query.c3
// const hash=q.hash
// const filename="."+q.pathname
// const fcontent=c1+"!\n"+c3+" "+c2+"\n"+hash
// // console.log(fcontent)

// fs.writeFileSync(filename,fcontent)
// http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end("<h1 style='color:green'><pre>"+data+"</pre></h1>")
//     }
//     else{
//         res.writeHead(404,{"content-type":"text/html"})
//         res.end("Page not found !")
//     }
// }).listen(6008)


//Write a NodeJS code to calculate and display the profit or loss incurred by an investor who purchased 100 shares of a company's stock at Rs.50 per share and later sold them at Rs.60 per share. The script should utilize the HTTP module to create an HTTP server that serves the profit or loss details. If there is a profit, the message should be displayed in green color, and if there is a loss, it should be displayed in red color on server.

http.createServer((req,res)=>{
    var cal=(100*60)-(100*50)
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(`<html>
                    <head>
                 <head>
                 <body>
                    <p id='p1'>${cal}</p>
                    <script>
                        data=document.getElementById('p1').innerHTML
                        if(data===10000){
                            data.style.color='green'
                        }
                        else{
                            data.style.color='red'
                        }
                    <script>
                 </body>

                 </html>`)
        res.end()
    }
    else{
        res.write("Page not found")
        res.end()
    }
}).listen(5006)