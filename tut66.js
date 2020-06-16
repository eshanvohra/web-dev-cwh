const http=require('http');
const fs=require('fs');

const fileContent=fs.readFileSync("tut45.html");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(fileContent);
})


server.listen(80,'127.0.0.1',()=>{
    console.log("Listening to server");
})