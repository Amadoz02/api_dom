const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const db = require('./config/db.js');

app.use(cors());
app.use(express.json());

// Importar rutas
app.use('/usuarios', require('./routes/usuarios.js'));
app.use('/ciudades', require('./routes/ciudades.js'));
app.use('/generos', require('./routes/generos.js'));
app.use('/lenguajes', require('./routes/lenguajes.js'));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});