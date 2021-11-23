const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database.js');

router.get('/nivel', (req,res) => {
    mySqlConnection.query('SLECT * FROM nivel', (err, rows, fields) => {
        if(!err){
            res.send({
                nivel: rows
            })
        }else{
            res.send({
                message: 'no se puede consultar la bd',
                nivel: null
            })
        }
    });
});