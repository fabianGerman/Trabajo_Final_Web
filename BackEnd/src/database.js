const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_cheems',
    multipleStatements: true
});

mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
        return;
    }else{
        console.log('db esta concectada');
    }
});

module.exports = mysqlConnection;