const express = require('express');
const main = express();

main.set('view engine', 'ejs');

main.use(express.urlencoded({ extended: false }));
main.use(express(JSON));

main.use('/', require('./router'));

main.listen(5000, () => {
    console.log('SERVIDOR EJECUTANDOSE: http://localhost:5000');
});
