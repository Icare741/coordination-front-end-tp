// routes/employes.js
const express = require('express');
const router = express.Router();
const employesController = require('../controllers/employesController');

router.get('/', employesController.getAllEmployes);
router.get('/:id', employesController.getEmployeById);
router.post('/', employesController.createEmploye);
router.put('/:id', employesController.updateEmploye);
router.delete('/:id', employesController.deleteEmploye);

module.exports = router;
