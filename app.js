// Ejemplo Hello World

//Comandos previos
// npm init
// touch app.js

var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello wordl');
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});

//Comandos Next
// node app.js


/* Propiedades declaradas
res: response (respuesta)
req: request (Solicitud)
*/