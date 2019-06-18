const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/",(req,res)=>{
    res.send("Hola mundo");
})

app.listen(3001,()=>{console.log("Aplicacion iniciada por el puerto: 3001...")});
