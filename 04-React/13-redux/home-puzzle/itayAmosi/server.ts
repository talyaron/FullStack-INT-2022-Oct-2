import express from "express";
import * as dotenv from "dotenv";
const app = express();
var mysql      = require('mysql');
require('dotenv').config()
dotenv.config();
app.use(express.json());




const pass: string | undefined = process.env.SQLPassword;
const connection = mysql.createConnection({
host     : 'localhost',
port: 3306,
user     : 'me',
pass : {pass},
database : 'my_db'
});







// import projectRouter from "./API/project/projectRouter";
// app.use('/api/project', projectRouter)


// import userRouter from "./API/user/userRouter";
// app.use('/api/user', userRouter)


// import commentRouter from "./API/comment/commentRouter";
// app.use('/api/comment', commentRouter)

//static file
app.use(express.static("./client"));

app.listen(4000, () => {
  console.log("server listen on port 4000");
});

