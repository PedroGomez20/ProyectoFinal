const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//MOSTRAR TODOS LOS REGISTROS
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM productos', (error, resultados) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { resultados: resultados });
        }
    })
})

//RUTA PARA CREAR REGISTROS
router.get('/create', (req, res) => {
    res.render('create');
})

module.exports = router;