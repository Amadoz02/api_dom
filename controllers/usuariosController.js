const db = require('../config/db.js');

exports.getUsuarios = (req, res) => {
    const sql = `
        SELECT u.id_user, u.nombre, u.apellido, u.correo,
               g.nom_genero, c.nom_ciudad
        FROM USUARIOS u
        JOIN GENEROS g ON u.fk_id_genero = g.id_genero
        JOIN CIUDADES c ON u.fk_id_ciudad = c.id_ciudad
    `;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createUsuario = (req, res) => {
    const { nombre, apellido, correo, fk_id_genero, fk_id_ciudad } = req.body;

    if (!nombre || !apellido || !correo || !fk_id_genero || !fk_id_ciudad) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const sql = 'INSERT INTO USUARIOS(nombre, apellido, correo, fk_id_genero, fk_id_ciudad) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, correo, fk_id_genero, fk_id_ciudad], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Usuario creado', id: result.insertId });
    });
};


// PUT - actualizar todos los campos del usuario
exports.updateUsuario = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, correo, fk_id_genero, fk_id_ciudad } = req.body;
    const sql = `
        UPDATE USUARIOS
        SET nombre = ?, apellido = ?, correo = ?, fk_id_genero = ?, fk_id_ciudad = ?
        WHERE id_user = ?
    `;
    db.query(sql, [nombre, apellido, correo, fk_id_genero, fk_id_ciudad, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Usuario actualizado', result });
    });
};

// PATCH - actualizar uno o más campos del usuario
exports.patchUsuario = (req, res) => {
    const { id } = req.params;
    const fields = Object.entries(req.body);
    if (fields.length === 0) return res.status(400).json({ error: 'No hay datos para actualizar' });

    const setClause = fields.map(([key]) => `${key} = ?`).join(', ');
    const values = fields.map(([, value]) => value);

    const sql = `UPDATE USUARIOS SET ${setClause} WHERE id_user = ?`;
    db.query(sql, [...values, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Usuario parcialmente actualizado', result });
    });
};

// DELETE - eliminar usuario por ID
exports.deleteUsuario = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM USUARIOS WHERE id_user = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Usuario eliminado', result });
    });
};
