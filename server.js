const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');
require('./hbs/helpers/helpers');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Paguina de Shalom'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});