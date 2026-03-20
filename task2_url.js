let address="https://www.google.com/search?q=good+morning&oq=good+mor&gs_lcrp=EgZjaHJvbWUqDQgAEAAYgwEYsQMYgAQyDQgAEAAYgwEYsQMYgAQyCggBEAAYsQMYgAQyBggCEEUYOTIKCAMQABixAxiABDIKCAQQABixAxiABDIHCAUQABiABDIKCAYQABixAxiABDIKCAcQABixAxiABDIHCAgQABiABDIKCAkQABixAxiABNIBCTMzMTNqMGoxNagCCLACAfEFUei3T0GCiSjxBVHot09Bgoko&sourceid=chrome&ie=UTF-8"
let u=require("url")
process.noDeprecation=true
fs=require("fs")
var q=u.parse(address,true)
let data=q.query
fs.writeFileSync("1.txt",`user search ${data.q} on ${q.hostname.substring(4)}`)

add="http://localhost;8080/data?name=Jay&age=25"
let data1=new URL(add)
console.log(data1)
console.log(data1.searchParams.get('name'))
console.log(data1.searchParams.get('age'))