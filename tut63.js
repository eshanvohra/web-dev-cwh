const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Pseudo Selectors &more designing</title>
      <style>
      .container{
          border: 2px solid red;
          background-color: rgb(209, 247, 152);
          padding: 34px;
          margin: 34px auto;
          width: 666px;
      }
      
      .btn:hover{
          background-color: rgb(60, 97, 4);
      }
      .btn{
          background-color: greenyellow;
          padding: 6px;
          border: none;
          cursor: pointer;
          font-size: 12px;
          border-radius: 6px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      
      a{
          text-decoration: none;
          padding: 6px;
          border: none;
          cursor: pointer;
          font-size: 12px;
          border-radius: 6px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          background-color: greenyellow;
          font-weight: bold;
      }
      a:hover{
          color: chartreuse;
          background-color:  aliceblue;
      }
      a:visited{
          background-color: black;
          color:yellow;
      }
      a:active{
          background-color: blue;
      }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h3>
              This is my heading
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rerum ratione quam tempore perspiciatis
              voluptatibus aut quia qui possimus dolore eius blanditiis reprehenderit aspernatur hic reiciendis? Id
              eligendi voluptatum ipsa consectetur laboriosam eaque rerum! </p>
              <a href="google.com" >Read More</a>
              <button class="btn">Contact Us</button>
              </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});