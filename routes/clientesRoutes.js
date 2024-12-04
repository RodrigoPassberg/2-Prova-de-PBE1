const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.post('/',clientesController.createcliente);
router.get('/',clientesController.readclientes);
router.put('/:id', clientesController.updatecliente);
router.delete('/:id', clientesController.deletecliente);


module.exports = router;