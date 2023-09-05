const express = require('express');
const app = express();
const path = require("path")
require('dotenv').config()

const PORT = process.env.PORT || 3000

// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
// //-----------------------------------------------------------------------

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });


// //json formate me data send krege.
// app.post('/api/register', (req,res)=>{
//     console.log(req.body)
//   res.json({
//     success : 'true'
//   })
// })

// app.post('/api/login', (req, res) => {
//     const username = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;

//     // Here you can perform authentication logic with the provided credentials
//     // For now, let's just send back a response with the received data
//     res.json({
//         name: username,
//         email: email,
//         password: password
//     });
// });

//---------------------------------------------------------------------------------
//midleware
app.use(express.json()) //data change into json
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.send("Welcome to Express Server")
})

app.post("/", (req, res)=>{
    const data = req.body
    console.log(req.body)
    res.json(data) //received data in json format
    //----------------------------------------------
    //Normal format received data
    //res.send(`<h1>Hello I am ${req.body.name}
     //and my email i ${req.body.email} and password ${req.body.password}
   // </h1>`) //received name in normal format
})

app.get("/about", (req, res) => {
    res.send("<h1>This is About Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>This is contact Page</h1>");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


//using route get data in thander client or postman