const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res) => {
    res.render('index');
/*     conexion.query('SELECT * FROM productos', (error, resultados) => {
        if(error) {
            throw error;
        } else {
            res.send(resultados);
        }
    }) */
})

module.exports = router;