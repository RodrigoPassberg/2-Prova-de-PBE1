const db = require ('../database/database');

const professor ={
    //Read
    getAll: (callback) => {
        db.query('SELECT * FROM professor', callback);
    },
    getbyId: (professor_id, callback) => {
        db.query('SELECT * FROM professor WHERE professor_id = ?',[professor_id], callback);
    },
    // Create
    create: (nome, cpf, email, endereco, data_nascimento, data_cadastro, callback) => {
        const query = 'INSERT INTO professor (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro], callback);
    },
    //Update
    update: (professor_id, nome, cpf, email, endereco, data_nascimento, data_cadastro, callback) => {
        const query = 'UPDATE professor SET nome = ?, cpf = ?, email = ?, endereco = ?, data_nascimento = ?, data_cadastro = ? WHERE professor_id = ?';
        db.query(query, [nome, cpf, email, endereco, data_nascimento, data_cadastro, professor_id], callback);
    },
    //Delete
    delete: (professor_id, callback) => {
        db.query('DELETE FROM professor WHERE professor_id = ?',[professor_id], callback);
    }
    
};

module.exports = professor;