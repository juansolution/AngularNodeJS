const express = require("express");
const morgan = require("morgan");
const app = express();
const {mongoose} = require("../src/database");

// Sentting
app.set("port", process.env.PORT || 3001)

app.use(morgan("dev"));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hola mundo");
})

app.get("*",(req,res)=>{
    res.send("*");
})

app.listen(app.get("port"),()=>{console.log("Aplicacion iniciada por el puerto:" , app.get("port"))});

