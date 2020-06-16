const http = require('http');
const fs = require('fs');

const hostname= '127.0.0.1';
const port=3000;
const home= fs.readFileSync('./home.html');
const about= fs.readFileSync('./about.html');
const services= fs.readFileSync('./services.html');
const contact=fs.readFileSync('./contact.html');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    url=req.url;
    if(url=='/'){

        res.end(home);
    }
    else if(url=='/about'){

        res.end(about);
    }
    else if(url=='/services'){

        res.end(services);
    }
    else if(url=='/contact'){

        res.end(contact);
    }
    else{
        res.end(`<h1> 404 Not Found`);
    }

});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});