// controllers/stocksController.js
const Stock = require('../models/Stock');

exports.getAllStocks = (req, res) => {
    Stock.getAll((stocks) => {
        res.json(stocks);
    });
};

exports.getStockById = (req, res) => {
    const id = req.params.id;
    Stock.getById(id, (stock) => {
        res.json(stock);
    });
};

exports.createStock = (req, res) => {
    const newStock = req.body;
    Stock.create(newStock, (id) => {
        res.json({ message: 'Stock created', id: id });
    });
};

exports.updateStock = (req, res) => {
    const id = req.params.id;
    const updatedStock = req.body;
    Stock.update(id, updatedStock, (rowsAffected) => {
        res.json({ message: 'Stock updated', rowsAffected: rowsAffected });
    });
};

exports.deleteStock = (req, res) => {
    const id = req.params.id;
    Stock.delete(id, (rowsAffected) => {
        res.json({ message: 'Stock deleted', rowsAffected: rowsAffected });
    });
};
