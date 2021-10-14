const express=require('express')
// const cors=require('cors');
const bodyParser=require('body-parser')
const app=express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.port || 3080;
require("./DB/connection");
const User=require('./Models/userSchema')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())
// app.use(cors());


app.use(require('./Router/auth.js'))
app.get("/", (req, res) => {
    res.send("Hello world contact Page");
});
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
