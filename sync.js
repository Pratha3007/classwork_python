// Synchorous 

fs=require("fs")
fs.writeFileSync("lec1.txt","JSON")
fs.appendFileSync("lec1.txt","Node")
data=fs.readFileSync("lec1.txt","utf8")
console.log(data)
console.log("Process End")
