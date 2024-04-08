// routes/clients.js
const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

router.get('/', clientsController.getAllClients);
router.get('/:id', clientsController.getClientById);
router.post('/', clientsController.createClient);
router.put('/:id', clientsController.updateClient);
router.delete('/:id', clientsController.deleteClient);

module.exports = router;
