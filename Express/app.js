const express = require('express');
const path=require('path');
const app = express();

const port = 80;
//for serving static files
app.use('/static',express.static('static'));

//set template engine as pug

app.set('view engine','pug');
//set the views directory
app.set('views',path.join(__dirname,'views'));



app.get('/demo', function (req, res) {
    res.status(300).render('demo', { title: 'Hey hello harry ', message: 'Hello there! thanks for teling me how pug works' })
  })



app.get('/',(req,res)=>{

    res.send("This is home page of my first express app with harry");
})
app.get('/about',(req,res)=>{

    res.send("This is about page of my  express app with harry");
})
app.post('/about',(req,res)=>{

    res.send("This is post request of about page of my  express app with harry");
})
app.get('/this',(req,res)=>{

    res.status(300).send("Page not found");
})

app.listen(port,()=>{
    console.log(`The app started successfully at port ${port}.`)
})