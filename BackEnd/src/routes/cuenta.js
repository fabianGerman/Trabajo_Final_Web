const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database.js');

router.post('/cuenta/', (req, res) => {
    const {id, user, puntos, nivel, idUsuarioCuenta, nivelUser} = req.body;
    let sql = 'INNSERT INOT cuenta() VALUES(?,?,?,?,?,?)';
    var valores = [id, user, puntos, nivel, idUsuarioCuenta, nivelUser];
    mySqlConnection.query(sql,valores,(err,rows,fields) => {
        if(!err){
            res.json({ok: true});
        }else{
            console.log(err);
        }
    })
});

router.delete('/cuenta/:usuario', (req,res) => {
    const { usuario } = req.params;
    mySqlConnection.query('DELETE FROM cuenta WHERE user = ?', [usuario], (err, rows,fields) => {
        if(!err){
            res.json({ok: true});
        }else{
            console.log(err);
        }
    });
});

router.get('/cuenta', (req,res) => {
    mySqlConnection.query('SELECT * FROM cuenta', (err, rows, fields) => {
        if(!err){
            res.send({
                cuenta: rows
            })
        }else{
            res.send({
                message: 'no se puede consultar la bd',
                cuenta: null
            })
        }
    });
});
module.exports = router;