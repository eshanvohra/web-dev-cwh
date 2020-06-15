const fs=require("fs");
let text=fs.readFileSync("eshan.txt","utf-8");

text=text.replace("eshan","superman");


console.log(text);

fs.writeFileSync("neweshan.txt",text);