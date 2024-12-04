const db = require ('../database/database');

const veiculos ={
    //Read
    getAll: (callback) => {
        db.query('SELECT * FROM veiculos', callback);
    },
    getbyId: (veiculos_id, callback) => {
        db.query('SELECT * FROM veiculos WHERE veiculos_id = ?',[veiculos_id], callback);
    },
    // Create
    create: (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id, callback) => {
        const query = 'INSERT INTO veiculos (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id], callback);
    },
    
    //Update
    update: (veiculos_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id, callback) => {
        const query = 'UPDATE veiculos SET marca_veiculo = ?, modelo_veiculo = ?, ano_veiculo = ?, fabricacao_veiculo = ?, cliente_id = ? WHERE veiculos_id = ?';
        db.query(query, [marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id, veiculos_id], callback);
    
    },
    //Delete
    delete: (veiculos_id, callback) => {
        db.query('DELETE FROM veiculos WHERE veiculos_id = ?',[veiculos_id], callback);
    }
    
};

module.exports = veiculos;