
//OS Module
// os=require("os")
// console.log(os.arch()) // x64
// console.log(os.freemem()) //3683041280
// console.log(os.tmpdir()) //C:\Users\LJENG\AppData\Local\Temp

//Event Module

var EventEmitter=require("events")
var ee=new EventEmitter()
ee.on("mrgfunction",()=>{
    console.log("Today is the Wedding day")
})
ee.emit("mrgfunction")

console.log("---------------------")

//event.addListener(eventtime,Listener) ..same as event.on
//event.on(eventname,listener)
//e.emit(event,arg...)
//e.removeListener(event,Listener)
//ee.removeAllListeners([event])
//.listenerCount(event)---count of listener

// 1.photo
// 2.caterer
// 3 deco
// 4 bride and groom on Stage


function deco(){
    console.log("Im the decorator")
}
function photo(){
    console.log("Im the photographer")
}
function c(){
    console.log("Im the catrer")
}
function bg(){
    console.log("We are the Bride and Groom")
}

ee.on("mrg",deco)
ee.on("mrg",c)
ee.on("mrg",photo)
ee.on("mrg",bg)
console.log("Before")
ee.emit("mrg")
console.log("Thnkyou")

console.log("Task-1==========")
// Task-1
//Write a Node.js program using the events module to simulate a sequence of events: 
// When a "connection" event occurs, print "Connection successfully" and trigger a "data-received" event.
// When the "data-received" event occurs, print "Data received successfully".
// Finally, print "Thanks" at the end of execution.

ee.on("connection",()=>{
    console.log("Success")
    ee.on("data-received",()=>{
        console.log("Data success")
    })
})
ee.emit("connection")
ee.emit("data-received")
console.log("Thankyou")

console.log("==========New concept=========")
ee.on("status",(code,type)=>{
    console.log(`code is ${code} and type is ${type}`)
})
ee.emit("status",200,"Ok")


console.log("==========New concept=========")
let l1=function lis1(){
    console.log("Lis 1")
}
let l2=function lis2(){
    console.log("Lis 2")
}
ee.addListener("conn",l1)
ee.on("conn",l2)
ee.emit("conn")
let d=ee.listenerCount("conn")
console.log(d)
ee.emit("conn")

// Lis 1
// Lis 2
// 2
// Lis 1
// Lis 2



console.log("==========New concept=========")
let l11=function lis1(){
    console.log("Lis 1")
}
let l12=function lis2(){
    console.log("Lis 2")
}
ee.addListener("conn1",l11)
ee.once("conn1",l12)
ee.emit("conn1")
let d1=ee.listenerCount("conn1")
console.log(d1)
ee.emit("conn1")

// Lis 1
// Lis 2
// 1
// Lis 1


console.log("--------------")

ee.removeListener("conn",l1)
var d2=ee.listenerCount("conn")
console.log(d2)//1
ee.emit("conn")//Lis 1

// console.log("Task-3==========")
// // Write a node js script to write the text “This is data” to new.txt file. After that append the text “that is data” to same ne .txt file. After that read the file and print file concept on console. After finishing read operation, print the line “Thanks for using my program” on console. All read/write operations are asynchronous. (using Event)


// fs=require("fs")
// ee.on("create",()=>{
//     fs.writeFile("new.txt","This is Data",(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Created")
//         ee.emit("update")
//     })
// }) 

// ee.on("update",()=>{
//     fs.appendFile("new.txt","\n That is Data",(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Updated")
//         ee.emit("read")
//     })

// })
// ee.on("read",()=>{
//     r=fs.readFile("new.txt","utf8",(err)=>{
//         if(err){
//            console.log(err)
//         }
//         console.log("Read")
//         ee.emit("finish")
//     })
// })    
// ee.on("finish",()=>{
//      console.log("Thanks for using my program")
// })

// ee.emit("create")   


// Created
// Updated
// Read
// Thanks for using my program
    
   


console.log("Task-4==========")
// Write node js script to handle events as asked below.
// 1) Check the radius is negative or not. If negative then display message “Radius” must be positive” else calculate the perimeter of circle. 
// 2) Check side is negative or not. If negative then display message “Side must be positive” else calculate the perimeter of square. 

ee.on("circle",(radius)=>{
    if(radius<0){
        console.log("Radius must be positive")
    }
    else{
        console.log(`Perimeter of circle is : ${2*3.14*radius}`)
    }
})
ee.on("square",(side)=>{
    if(side<0){
        console.log("Side must be positive")
    }
    else{
        console.log(`Perimeter of Square is : ${4*side}`)
    }
})

ee.emit("circle",-1)


console.log("Task-7==========")
// Write a nodeJS script to fire an event named calculate which calculates the total marks of 5 subjects about of 25 marks and displays the total marks on console as an output.The calculate event fires another event name percentage which takes total marks as argument and percentage should get displayed in console.

ee.on("calculate",(s1,s2,s3,s4,s5)=>{
    if(s1>25 & s2>25 & s3>25 & s4>25 & s5>25 ){
        console.log("Marks should be less than 25")
    }
    else{
        total=s1+s2+s3+s4+s5
        console.log(`Total: ${total}`)
        ee.emit("percentage",total)
    }
})
ee.on("percentage",(total)=>{
    console.log(total)
    per=(total/(25*5))*100
    console.log(`Percentage: ${per}`)
})
ee.emit("calculate",1,2,3,4,5)

console.log("Task-9==========")
// Write a node.js script using Event handling to perform following tasks in sequence:
// Create a folder named Test.
// Create file in it named abc.txt and enter data into it.
// Append data to that file abc.txt and print message “Data Appended Successfully”.
// Read the content of the file abc.txt and print the concsole (Ref*- content on http web server).
// Copy data from abc.txt to pqr.txt.
// Delete old file and Lastly print the message “All operations performed successfully” on console.
// Perform using Synchronous file system module.


fs=require("fs")
ee.on("mkdir",()=>{
    if(!fs.existsSync("Test")){
        fs.mkdirSync("Test")
        console.log("mkdir done")
        ee.emit("write")
    }
    else{
        console.log("Already exists dir")
    }
})
ee.on("write",()=>{
    fs.writeFileSync("Test/abc.txt","Hello abc")
    ee.emit("append")
})
ee.on("append",()=>{
    fs.appendFileSync("Test/abc.txt","\n Data Appended Success")
    ee.emit("read")
})
ee.on("read",()=>{
    data=fs.readFileSync("Test/abc.txt","utf8")
    console.log(data)
    ee.emit("copy")
})
ee.on("copy",()=>{
    fs.copyFileSync("Test/abc.txt","Test/pqr.txt")
    ee.emit("unlink")
})
ee.on("unlink",()=>{
    fs.unlinkSync("Test/abc.txt")
    ee.emit("Finish")
})
ee.on("Finish",()=>{
  console.log("All Done")  
})
ee.emit("mkdir")
