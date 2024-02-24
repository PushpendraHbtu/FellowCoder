const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 // 
 res.end(`<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <link rel="stylesheet" href="index.css">
     <title>Fellowcoder.com/login</title>
     <style>
         body{
             background-color: gainsboro;
         }
         .form
         {
             padding: 40px;
         }  
         body{  
             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         }
 
         input[type=text],input[type="email"],input[type="number"],input[type="password"]
         {
             width: 100%;
             height: 35px;
             border-radius: 8px;
             border: none;
         }
         button{
             width: 100%;
             background-color: rgba(76, 179, 179, 0.575);
             border: none;
             height: 50px;
             border-radius: 8px;
            
         }
         button:hover{
             background-color: rgb(76, 179, 179) ;
             cursor: pointer;
         }
         .nav{
             background-color: rgb(53, 48, 48) ;
             color: white;
             text-align: center;
             margin: 0;
             padding: 0;
         }
         a{
             color: white;
             text-decoration: none;
         }
     </style>
 </head>
 <body>
     <div class="nav">
         <a href="home.html" class="fa fa-home" style="font-size: 36px;"></a>
     </div>
 <form  action="fellowcoder.php" method="POST">
     <h1 style="text-align: center; background-color: rgb(76, 179, 179); padding: 30px;">Sign Up on Fellowcoder</h1>
     <fieldset>
         <legend>User Information</legend>
     <p>Name: <input type="text" name="name" id="" placeholder="Harshit Hayaran"></p>
     <p>Mail: <input type="email" name="eamil" id="" placeholder="fellow123@gmail.com"></p>
     <p>Number: <input type="number" name="mobile" id="" placeholder="1234567890"></p>
     <p>Passward: <input type="password" name="passward" id="" placeholder="fellowocde565"></p>
     <p><button>Submit</button></p>
 </fieldset>
 </form>
 <div class="footer">
     <h1>www.fellowcoder.com</h1>
     <hr>
     <h2>All copyrite reserved by PUSHPENDRA SINGH</h2>
     <hr>
     <h3>Follow us on social plateforms </h3><br>
     <a href="https://m.facebook.com/profile.php?id=100032764934942"  target="_blanck" class="fa fa-facebook"></a>
     <a href="https://mobile.twitter.com/HarshitHayaran"  target="_blanck" class="fa fa-twitter"></a>
     <a href="https://www.instagram.com/soham_hayaran/" target="_blanck" class="fa fa-instagram"></a>
 </div>
 </body>
 </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});