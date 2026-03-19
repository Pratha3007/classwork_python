// Asynchronous
fs=require("fs")
fs.writeFile("lec1.txt","JSON",(err)=>{
    if(err){
        throw err
    }
    else{
        console.log("Completed")
    }

fs.appendFile("lec1.txt","\nWeahd",(err)=>{
    if(err){
        throw err
    }
    else{
        console.log("Append Completed")
    }

data=fs.readFile("lec1.txt","utf8",(err,data)=>{
    if(err){
        throw err
    }
    else{
        console.log(data)
    }
})
})
})
console.log("Process End")
