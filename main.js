const express = require('express');
const main = express();

main.listen(5000, ()=> {
    console.log('SERVIDOR EJECUTANDOSE: http://localhost:5000');
});