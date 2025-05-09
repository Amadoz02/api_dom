import connection from '../config/db.js';

const getCiudades = (req, res) => {
    connection.query('SELECT * FROM CIUDADES', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
export default getCiudades;