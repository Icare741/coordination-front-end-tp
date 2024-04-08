// routes/commandes.js
const express = require('express');
const router = express.Router();
const commandesController = require('../controllers/commandesController');

router.get('/', commandesController.getAllCommandes);
router.get('/:id', commandesController.getCommandeById);
router.post('/', commandesController.createCommande);
router.put('/:id', commandesController.updateCommande);
router.delete('/:id', commandesController.deleteCommande);

module.exports = router;
