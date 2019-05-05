const http = require('http');
http.createServer((reg, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
                nombre: 'fernando',
                edad: 23,
                url: reg.url
            }
            //res.write('Hola mundo');
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);;

console.log('Escuchando el puerto 8080');


//UTILIZACION DE HTTP CON EXPRESS
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let salida = {
        nombre: 'Shalom',
        edad: 23,
        url: req.url
    };
    //res.write('Hola mundo');
    res.send(salida);
});

app.listen(8080, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});