const express = require('express');
const main = express();

main.set('view engine', 'ejs');

main.listen(5000, ()=> {
    console.log('SERVIDOR EJECUTANDOSE: http://localhost:5000');
});