const professor = require('../models/professorModel');

const createprofessor = (req, res) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;
    professor.create(nome, cpf, email, endereco, data_nascimento, data_cadastro, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Professor criado com sucesso'});
    });
};

const readprofessor = (req, res) => {
    professor.getAll((err, result) => {
        if (err) {
            return res.status(500).json({error:err.message});
        }
        res.json(result);
    });
};

const updateprofessor = (req, res) => {
    const { nome, cpf, email, endereco, data_nascimento, data_cadastro } = req.body;
    const professor_id = req.params.id;
    
    professor.update(professor_id, nome, cpf, email, endereco, data_nascimento, data_cadastro, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Professor atualizado com sucesso', result });
    });
};

const deleteprofessor = (req, res) => {
    professor.delete(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json({message: 'professor removido com sucesso', result});
    });
};

module.exports = {createprofessor, readprofessor, updateprofessor, deleteprofessor};