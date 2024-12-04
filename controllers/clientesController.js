const clientes = require('../models/clientesModel');

const createcliente = (req, res) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;
    clientes.create(nome, cpf, email, endereco, data_nascimento, data_cadastro, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Cliente criado com sucesso'});
    });
};

const readclientes = (req, res) => {
    clientes.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updatecliente = (req, res) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;
    const cliente_id = req.params.id;
    
    clientes.update(cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Cliente atualizado com sucesso', result });
    });
};

const deletecliente = (req, res) => {
    const cliente_id = req.params.id; 
    clientes.delete(cliente_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Cliente removido com sucesso', result });
    });
};

module.exports = { createcliente, readclientes, updatecliente, deletecliente };
