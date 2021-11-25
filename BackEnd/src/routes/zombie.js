const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database.js');

router.get('/zombie', (req,res) => {
    mySqlConnection.query('SELECT * FROM zombie', (err, rows, fields) => {
        if(!err){
            res.send({
                zombie: rows
            })
        }else{
            res.send({
                message: 'no se puede consultar la bd',
                usuarios: null
            })
        }
    });
});
module.exports = router;