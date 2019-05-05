//HELPERS
const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});

/*app.get('/', (req, res) => {
    let salida = {
        nombre: 'Shalom',
        edad: 23,
        url: req.url
    };
    //res.write('Hola mundo');
    res.send(salida);
});*/