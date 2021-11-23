const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database.js');

router.post('/login', (req, res) => {
    const {usuario, password} = req.body;
    mySqlConnection.query('SELECT *FROM usuario where usuario=? and password=?', [usuario, password], (err, rows, fields) =>{
        if(!err && rows.length === 1){
            res.json({
                message: 'usuario logeado',
                access: true,
                data: rows[0]
            });
        }else{
            res.json({
                message: 'usuario no encontrado'
            })
        }
    });
});

router.post('/usuario/', (req, res) => {
    const {id, usuario, password, nombre, email} = req.body;
    let sql = 'INNSERT INOT usuarios(idUsuario, usuario, password, nombre, email) VALUES(?,?,?,?,?)';
    var valores = [id, usuario, password, nombre, email];
    mySqlConnection.query(sql,valores,(err,rows,fields) => {
        if(!err){
            res.json({ok: true});
        }else{
            console.log(err);
        }
    })
});

router.delete('/usuario/:usuario', (req,res) => {
    const { usuario } = req.params;
    mySqlConnection.query('DELETE FROM usuarios WHERE usuario = ?', [usuario], (err, rows,fields) => {
        if(!err){
            res.json({ok: true});
        }else{
            console.log(err);
        }
    });
});

router.get('/usuario', (req,res) => {
    mySqlConnection.query('SLECT * FROM usuarios', (err, rows, fields) => {
        if(!err){
            res.send({
                usuarios: rows
            })
        }else{
            res.send({
                message: 'no se puede consultar la bd',
                usuarios: null
            })
        }
    });
});