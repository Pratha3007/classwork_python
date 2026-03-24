// Write a Node.js program using the fs synchronous methods to perform the following tasks:
// Create a file score.txt and store player data in JSON format with the following players:
// Rohit = 52
// Kohli = 96
// Gill = 20
// Rahul = 33
// Tilak = 30
// Read the score.txt file and parse the JSON data.
// Add a new player {name: "Hardik", runs: 52} to the existing list.
// Calculate the total runs scored by all players.
// Calculate the run rate for T20 match (20 overs).
// Find players who scored more than 50 runs.
// Write the updated player list, total runs, run rate, and players above 50 runs back to the same file.
// Append the top performers (players above 50 runs) at the end of the file.

fs=require("fs")
var data=[{"name":"Rohit","runs":52},{"name":"Kohli","runs":96},{"name":"Gill","runs":20},{"name":'Rahul',"runs":33},{"name":"Tilak","runs":30}]
var str=JSON.stringify(data)
fs.writeFileSync("score.txt",str)
var read=fs.readFileSync("score.txt","utf8")

 // Adding a new player
data.push({name: "Hardik", runs: 52})
console.log(data)
var string=JSON.stringify(data)
fs.writeFileSync("score.txt",string)
var read1=fs.readFileSync("score.txt","utf8")
var new1=JSON.parse(read1)
let total=0
new1.forEach(p=> total+=p.runs)
let runrate=total/20
console.log(total)
console.log(runrate)

