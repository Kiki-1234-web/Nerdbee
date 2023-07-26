const express = require('express')
const app = express();
const mongoDB = require('./db')
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
//mongoDB();
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.get('/', (req,res)=>{
    console.log("hello world")
})
app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})

