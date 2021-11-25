const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database.js');

router.get('/zombie2', (req,res) => {
    mySqlConnection.query('SELECT * FROM zombie2', (err, rows, fields) => {
        if(!err){
            res.send({
                zombie2: rows
            })
        }else{
            res.send({
                message: 'no se puede consultar la bd',
                zombie2: null
            })
        }
    });
});
module.exports = router;