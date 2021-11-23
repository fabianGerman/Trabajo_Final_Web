const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database.js');

router.get('/plataforma', (req,res) => {
    mySqlConnection.query('SLECT * FROM plataforma', (err, rows, fields) => {
        if(!err){
            res.send({
                plataforma: rows
            })
        }else{
            res.send({
                message: 'no se puede consultar la bd',
                plataforma: null
            })
        }
    });
});