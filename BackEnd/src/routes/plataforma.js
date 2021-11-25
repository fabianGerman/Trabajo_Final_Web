const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database.js');

router.get('/plataforma', (req,res) => {
    mySqlConnection.query('SELECT * FROM plataforma', (err, rows, fields) => {
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
router.get('/plataforma/:levelId', (req, res) => {
    const { levelId } = req.params;
    mySqlConnection.query('SELECT * FROM plataforma WHERE nivel=?', [levelId],(err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;