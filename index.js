const express = require('express');

const app = express();

const port = 3000;





app.get('/',function(req,res){

res.send("Hola mundo : desde Application Sivas");

});
app.listen(port,()=>{


    console.log(`Corriendo desde https://localhost:${port}`)
})