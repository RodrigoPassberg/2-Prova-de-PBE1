const db = require ('../database/database');

const telefone ={
    //Read
    getAll: (callback) => {
        db.query('SELECT * FROM telefone', callback);
    },
    getbyId: (telefone_id, callback) => {
        db.query('SELECT * FROM telefone WHERE telefone_id = ?',[telefone_id], callback);
    },
    // Create
    create: (cliente_id, professor_id, numero, tipo, callback) => {
        const query = 'INSERT INTO telefone (cliente_id, professor_id, numero, tipo) VALUES (?, ?, ?, ?)';
        db.query(query, [cliente_id, professor_id, numero, tipo], callback);
    },
   //Update
   update: (telefone_id, cliente_id, professor_id, numero, tipo,  callback) => {
    const query = 'UPDATE telefone SET cliente_id = ?, professor_id = ?, numero = ?, tipo = ? WHERE telefone_id = ?';
    db.query(query, [cliente_id, professor_id, numero,tipo, telefone_id], callback);
    },
    //Delete
    delete: (telefone_id, callback) => {
        db.query('DELETE FROM telefone WHERE telefone_id = ?',[telefone_id], callback);
    }
    
};

module.exports = telefone;