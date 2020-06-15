const fs=require("fs");
fs.readFile("eshan.txt","utf-8",(a,b)=>{
    console.log(a,b);
});

console.log("this is message");

