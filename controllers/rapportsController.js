// controllers/rapportsController.js
const Rapport = require('../models/Rapport');

exports.getVentes = (req, res) => {
    Rapport.getVentes((ventes) => {
        res.json(ventes);
    });
};

exports.getStocks = (req, res) => {
    Rapport.getStocks((stocks) => {
        res.json(stocks);
    });
};

exports.getPerformancesEmployes = (req, res) => {
    Rapport.getPerformancesEmployes((performances) => {
        res.json(performances);
    });
};
