const express = require('express');
const app = express();
const path = require("path")
require('dotenv').config()
// console.log(process.env.password)
// console.log(process.env.username)
//const bodyparse = require("body-parser")

const PORT = process.env.PORT || 3000

//it is depricated from express bodyparser
// app.use(bodyparse.urlencoded({extended:false}))
// app.use(bodyparse.json())

app.use(express.urlencoded({extended:false}))
app.use(express.json())
//-----------------------------------------------------------------------
// Serve static files from the "public" directory
// app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// //user '/' url pr data bhejega to as a out ham h1 tag wali line show krege.
//  app.post("/", (req, res) => {
//     //client ne bheja huaa data show krne ke liye body..parser.
//     console.log(req.body)
//     res.send(`
//     <h1>Hi Mr ${req.body.name}</h1>; 
//     <h1>Your Email id ${req.body.email}</h1>; 
//     <h1>Your Password ${req.body.password}</h1>
//     `);
// });

//json formate me data send krege.
app.post('/api/register', (req,res)=>{
    console.log(req.body)
  res.json({
    success : 'true'
  })
})

app.post('/api/login', (req, res) => {
    const username = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // Here you can perform authentication logic with the provided credentials
    // For now, let's just send back a response with the received data
    res.json({
        name: username,
        email: email,
        password: password
    });
});

//---------------------------------------------------------------------------------

app.get("/about", (req, res) => {
    res.send("<h1>This is About Page</h1>");
});

// app.use((req, res) => {
//     res.status(404).send(
//         `<html>
//             <head><title>404 Not Found</title></head>
//             <body style="text-align: center;">
                
//                 <img src="image.png" alt="404-Image" style="width: 300px; height: auto;"><br><br>
//                 <button style="padding: 10px 20px; background-color: green; color: white; border: none; cursor: pointer;" onclick="goHome()">Go to Homepage</button>
//                 <script>function goHome() { window.location.href = "/"; }</script>
//             </body>
//         </html>`
//     );
// });

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
