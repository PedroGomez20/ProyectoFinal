const conexion = require('../database/db');

exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const contenido = req.body.contenido;
    const categoria = req.body.categoria;
    const precio = req.body.precio;
    const stock = req.body.stock;
    console.log(nombre + " " + contenido);
    console.log(categoria + " " + precio);
    console.log(stock);
}