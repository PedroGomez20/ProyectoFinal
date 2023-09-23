const mysql = require('mysql');

const conexion = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_tienda'
});

conexion.connect((error) => {
    if(error) {
        console.error('El error de conexión es: ' + error);
        return
    } else {
        console.log('Conexión a MySQL exitoso')
    }
})

module.exports = conexion;