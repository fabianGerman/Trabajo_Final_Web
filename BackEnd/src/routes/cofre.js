const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database.js');

router.get('/cofre', (req,res) => {
    mySqlConnection.query('SLECT * FROM cofre', (err, rows, fields) => {
        if(!err){
            res.send({
                cofre: rows
            })
        }else{
            res.send({
                message: 'no se puede consultar la bd',
                cofre: null
            })
        }
    });
});