const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vitoriakar'
});

connection.connect(err => {
    if (err) {
        console.error("Erro ao conectar no banco de dados:",err.stack);
        return;
    }
    console.log("Conectado ao Banco de Dados");
});

module.exports = connection;