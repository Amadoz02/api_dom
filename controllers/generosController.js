import connection from '../config/db.js';


const getGeneros = (req, res) => {
    connection.query('SELECT * FROM GENEROS', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
export default getGeneros;