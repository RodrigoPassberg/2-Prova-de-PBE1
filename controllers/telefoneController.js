const professor = require('../models/professorModel');
const telefone = require('../models/telefoneModel');

const createtelefone = (req, res) => {
    const {cliente_id, professor_id, numero, tipo} = req.body;
    telefone.create(cliente_id, professor_id, numero, tipo, (err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'telefone criado com sucesso', result});

    });
};

const readtelefone = (req, res) => {
    telefone.getAll((err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.json(result);
    });
};

const updatetelefone = (req, res) => {
    const {cliente_id, professor_id, numero, tipo } = req.body;
    const telefone_id = req.params.id;
    
    telefone.update(telefone_id, cliente_id, professor_id, numero, tipo,  (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'telefone atualizado com sucesso', result });
    });
};

const deletetelefone = (req, res) => {
    telefone.delete(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json({message: 'telefone removido com sucesso', result});
    });
};

module.exports = {createtelefone, readtelefone, updatetelefone, deletetelefone};