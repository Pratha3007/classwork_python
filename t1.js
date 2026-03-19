// Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. Print sorted array of these 5 elements on Node Js server.

// fs=require("fs")
// fs.writeFileSync("t1.txt","0 1 -9 20 33 44 50")
// data=fs.readFileSync("t1.txt","utf8")
// data1=data.split(" ").sort((a,b)=>a-b) // b-a: descending
// //data1=data.split(" ").sort()  // multiple digits hoi to problem avi sake
// console.log(data1)


//----------------------------------------------------------2

// Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console.
// fs=require("fs")
// datas=[{"name":"abc"},{"age":"20"}]
// fs.writeFileSync("a.txt",JSON.stringify(datas))
// data=fs.readFileSync("a.txt","utf8")
// obj=JSON.parse(data)
// console.log(obj[1].age)


// //Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respectively. And object as well as calculated  data in shape.txt	
// //const shape=[{name:"circle",diameter:8},{name:"square",side:10}]

// fs=require("fs")
// const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
// fs.writeFileSync("shape.txt",JSON.stringify(shape))
// var d=fs.readFileSync("shape.txt","utf8")
// b=JSON.parse(d)
// var pc=(b[0].diameter/2)*3.14*2
// var ps=(b[1].side)*4
// fs.appendFileSync("shape.txt","\n Perimeter of circle: "+pc+"\n Perimeter of Square: "+ps)


//Write node js script and json to perform below tasks. 

// 1.	Write below object in txt file named input.txt  
// {data:{a:15,b:20,c:[40,30]}}
// 2.	Read data from the same file and perform the below tasks.
// a.	addition of a and b
// b.	subtraction of 2nd element of c and b. (Must be positive value)
// c.	multiplication of elements of c.
// 3.	Add the Output of addition, subtraction and multiplication below the object in output.txt file.

fs=require("fs")
data=[{a:15,b:20,c:[40,30]}]
fs.writeFileSync("input.txt",JSON.stringify(data))
r=fs.readFileSync("input.txt","utf8")
c1=JSON.parse(r)
a=c1[0].a+c1[0].b
s=c1[0].c[1]-c1[0].b
m=c1[0].c[1]*c1[0].c[0]
fs.appendFileSync("input.txt","\n Addition: "+a)
fs.appendFileSync("input.txt","\n Subtraction: "+s)
fs.appendFileSync("input.txt","\n Multipliaction: "+m)


