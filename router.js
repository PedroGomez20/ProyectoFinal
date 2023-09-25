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

//RUTA PARA EDITAR REGISTROS
router.get('/edit/:Id', (req, res) => {
    const Id = req.params.Id;
    conexion.query('SELECT * FROM productos WHERE Id = ?', [Id], (error, resultados) => {
        if (error) {
            throw error;
        } else {
            res.render('edit', { nombre: resultados[0] });
        }
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);

module.exports = router;