var u=require("url")
let address="http://localhost:8000/default.html?year=2026&month=March#warupdate"
process.noDeprecation=true
var q=u.parse(address,true)
// console.log(q)
// console.log(q.past)
// console.log(q.query)
// console.log(q.search)
// let  q1=new URL(address)
// console.log(q1)
let data=q.query
//console.log(data)
//console.log(data.year)
year=data.year
if((year%4==0) &&(year%100!=0) || (year%400==0)){
    console.log("Leap")

}
else{
    console.log("no leap")
}
