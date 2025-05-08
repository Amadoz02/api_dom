const db = require('../config/db.js');

exports.getLenguajes = (req, res) => {
    db.query('SELECT * FROM LENGUAJES', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};