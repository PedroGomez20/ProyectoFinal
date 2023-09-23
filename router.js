const express = require('express');
const router = express.Router();

router.get('/funcionando', (req, res) => {
    res.send('FUNCIONANDO');
})

module.exports = router;