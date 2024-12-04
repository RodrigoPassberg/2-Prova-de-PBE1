const db = require ('../database/database');

const clientes ={
    //Read
    getAll: (callback) => {
        db.query('SELECT * FROM clientes', callback);
    },
    getbyId: (cliente_id, callback) => {
        db.query('SELECT * FROM clientes WHERE cliente_id = ?',[cliente_id], callback);
    },
    // Create
    create: (nome, cpf, email, endereco, data_nascimento, data_cadastro, callback) => {
        const query = 'INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro], callback);
    },
    
    //Update
    update: (cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro, callback) => {
        const query = 'UPDATE clientes SET nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE cliente_id = ?';
        db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro, cliente_id], callback);
    
    },
    //Delete
    delete: (cliente_id, callback) => {
        db.query('DELETE FROM clientes WHERE cliente_id = ?',[cliente_id], callback);
    }
    
};

module.exports = clientes;