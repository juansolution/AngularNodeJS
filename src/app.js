const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hola mundo");
})

app.listen(3001,()=>{console.log("Aplicacion iniciada por el puerto: 3001...")});
