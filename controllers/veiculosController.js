const veiculos = require('../models/veiculosModel');

const createveiculo = (req, res) => {
    const { marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id } = req.body;
    veiculos.create(marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'veiculo criado com sucesso',result});
     
    });
};

const readveiculos = (req, res) => {
    veiculos.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateveiculo = (req, res) => {
    const { marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id } = req.body;
    const veiculos_id = req.params.id;
    
    veiculos.update(veiculos_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'veiculo atualizado com sucesso', result });
    });
};

const deleteveiculo = (req, res) => {
    const veiculos_id = req.params.id; 
    veiculos.delete(veiculos_id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'veiculo removido com sucesso', result });
    });
};

module.exports = { createveiculo, readveiculos, updateveiculo, deleteveiculo };
