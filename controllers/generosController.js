const db = require('../config/db.js');

exports.getGeneros = (req, res) => {
    db.query('SELECT * FROM GENEROS', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};