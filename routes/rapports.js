// routes/rapports.js
const express = require('express');
const router = express.Router();
const rapportsController = require('../controllers/rapportsController');

router.get('/ventes', rapportsController.getVentes);
router.get('/stocks', rapportsController.getStocks);
router.get('/performances-employes', rapportsController.getPerformancesEmployes);

module.exports = router;
