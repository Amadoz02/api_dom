import connection from '../config/db.js';

const getLenguajes = (req, res) => {
    connection.query('SELECT * FROM LENGUAJES', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
export default getLenguajes