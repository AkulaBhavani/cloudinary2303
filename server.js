const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
console.path=require("node:path");
app.use(express.static(path.join(__dirname,"./client/build")));

let connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"batch2303"
})

connection.connect((err)=>{
    if(err){
        console.log("Unable to connect to db")
    }else {
        console.log("Successfully connected to db");
    }
})

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signin",(req,res)=>{
    console.log(req.body);



connection.query(query,(err,results)=>{
    if(err){
        res.json(err);
    }else {
        res.json({status:"success",msg:"Account created success"})
    }
})

  
});


app.listen(1111,()=>{
    console.log("Listening to port 1111")
})
