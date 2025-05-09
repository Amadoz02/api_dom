import usuarios from './routes/usuarios.js'
import ciudades from './routes/ciudades.js'
import generos from './routes/generos.js'
import lenguajes from './routes/lenguajes.js'
import bodyParser from "body-parser";
import express from "express";


const port = 3000;




const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }))



// Importar rutas después del middleware
app.use('/usuarios', usuarios);
app.use('/ciudades', ciudades);
app.use('/generos', generos);
app.use('/lenguajes', lenguajes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
