const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculosController');

router.post('/',veiculosController.createveiculo);
router.get('/',veiculosController.readveiculos);
router.put('/:id', veiculosController.updateveiculo);
router.delete('/:id', veiculosController.deleteveiculo);


module.exports = router;