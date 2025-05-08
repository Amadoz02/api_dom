const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const app = express();
const port = 3000;



const db = require('./config/db.js');
app.use(bodyParser.json());// Middleware antes de las rutas

app.use(cors());

// Importar rutas después del middleware
app.use('/usuarios', require('./routes/usuarios.js'));
app.use('/ciudades', require('./routes/ciudades.js'));
app.use('/generos', require('./routes/generos.js'));
app.use('/lenguajes', require('./routes/lenguajes.js'));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
