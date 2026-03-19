// pm=require("path")
// a=pm.basename("D:25/fsd/a.txt")
// console.log(a)// a.txt
// b=pm.extname("D:25/fsd/a.txt")
// console.log(b)//.txt
// c=pm.dirname("D:25/fsd/a.txt")
// console.log(c)// D:25/fsd
// d=pm.parse("D:25/fsd/a.txt")
// console.log(d) // { root: 'D:', dir: 'D:25/fsd', base: 'a.txt', ext: '.txt', name: 'a' }

// //Write node.js script to check whether the file extension is  .txt or not.
// if(d.ext==".txt"){
//     console.log("file is text based")
// }
// else{
//     console.log("Not a text file")
// }

// Task -2
// Using Node.js, write a Node.js script that uses the Node.js Path Module and the Node.js File System Module with asynchronous methods to perform the following operations for the path FSD-mern/path.txt
// Extract the directory name from the given file path using the Path module.
// Create the extracted directory inside an existing folder using the asynchronous methods of the fs module.
// Extract the file name from the given path using the Path module.
// Create a file with the extracted file name inside the newly created directory and write some data into it.
// Copy the contents of this file to another file using an asynchronous file operation.
// Delete the original file after successfully copying the content.
// Note: All file operations must be performed using asynchronous methods of the fs module.

fs=require("fs")
pm=require("path")
p="FSD-mern/path.txt"
dir=pm.dirname(p)
console.log("Directory name: "+dir)
fname=pm.basename(p)
new_path=dir+"/"+fname
fs.mkdir(dir,(err)=>{
    if(err){
        throw err
    }
    else{
        console.log("Directory Created")
    }
    fs.writeFile(new_path,"Data added",(err)=>{
        if(err){
            throw err
        }
        else{
            console.log("Written")
        }
    fs.copyFile(new_path,dir+"/temp.txt",(err)=>{
        if(err){
            throw err
        }
        else{
            console.log("Copied")
        }
    fs.unlink(new_path,(err)=>{
        if(err){
            throw err
        }
        else{
            console.log("Deleted path.txt")
        }
    })//unlink 
    })//copyFile
    })//writeFile

// Directory name: FSD-mern
// Directory Created
// Written
// Copied
// Deleted path.txt

})//mkdir
