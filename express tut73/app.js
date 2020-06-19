const express = require('express');
const path=require('path');
const app = express();
const fs=require('fs');

const port = 80;
//Express specific stuff
//for serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//pug specific stuff
//set template engine as pug
app.set('view engine','pug');
//set the views directory
app.set('views',path.join(__dirname,'views'));

//endpoints
app.get('/',(req,res)=>{
    const con="This is the best content on internet";
    const params={
        'title':'pubg is best game',"content":con
    }
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
    let name=req.body.name;
    let age=req.body.age;
    let gender=req.body.gender;
    let address=req.body.address;
    let more=req.body.more;
    let outpurToWrite=`The name of client is ${name} ,${age} years old , ${gender}, residing at ${address}
    More about him/her: ${more}`;
    fs.writeFileSync(`output.txt`,outpurToWrite)
    const params={
        'message':'Your form has been submitted successfully!!'
    }
    
    res.status(200).render('index.pug',params);
})

//Starting the server
app.listen(port,()=>{
    console.log(`The app started successfully at port ${port}.`)
})