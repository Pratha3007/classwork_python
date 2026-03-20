let address="https://localhost:8000/test?T1=25&T2=24&T3=25#ABC"
process.noDeprecation=true
let u=require("url")
fs=require("fs")
var q=u.parse(address,true)
let data=q.query
avg=parseInt(data.T1)+parseInt(data.T2)+parseInt(data.T3)
console.log(avg)
fs.writeFileSync("result.txt",`Marks of ${q.hash} is: ${avg}`)