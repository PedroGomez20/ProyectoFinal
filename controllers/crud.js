const conexion = require('../database/db');

exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const contenido = req.body.contenido;
    const categoria = req.body.categoria;
    const precio = req.body.precio;
    const stock = req.body.stock;
    conexion.query('INSERT INTO productos SET ?',
        { nombre: nombre, contenido: contenido, categoria: categoria, precio: precio, stock: stock }, (error, resultados) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        })
}

exports.update = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const contenido = req.body.contenido;
    const categoria = req.body.categoria;
    const precio = req.body.precio;
    const stock = req.body.stock;
    conexion.query('UPDATE productos SET ? WHERE Id = ?',
        [{ nombre: nombre, contenido: contenido, categoria: categoria, precio: precio, stock: stock }, id], (error, resultados) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        })
}