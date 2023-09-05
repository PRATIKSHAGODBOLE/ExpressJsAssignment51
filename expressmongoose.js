//run this file using npm start before package.json start  "start": "nodemon filename.js"
// 1. requiring module
const mongoose = require('mongoose');

// 2. connect with the database (it's asynchronous)
mongoose
.connect('mongodb://localhost:27017/Users')
.then(() => console.log("Connection Successful"))
.catch((error) => console.error("Connection Error:", error));

// 3. creating a schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String }
});

// // 4. creating a Model/Collection (MyUsers)
const UserModel = new mongoose.model("MyUsers", UserSchema);

// 5. static data that you want to send into the database
const data = new UserModel({
  name: "Nisha",
  email: "nish@gmail.com",
  password: "nish"
});

//6. Retrieve the static data from database
// save data
  data
  .save()
  .then(() => console.log("Data Inserted into DB"))
  .catch((err) => console.log(err));

UserModel.find()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//server connected to the MongoDB compass and same code data show on the dbcompass.


