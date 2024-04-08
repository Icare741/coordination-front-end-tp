// models/stock.js
const db = require('../config/database');

class Stock {
    static getAll(callback) {
        db.query('SELECT * FROM stocks', (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    static getById(id, callback) {
        db.query('SELECT * FROM stocks WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    }

    static create(newStock, callback) {
        db.query('INSERT INTO stocks SET ?', newStock, (err, result) => {
            if (err) throw err;
            callback(result.insertId);
        });
    }

    static update(id, updatedStock, callback) {
        db.query('UPDATE stocks SET ? WHERE id = ?', [updatedStock, id], (err, result) => {
            if (err) throw err;
            callback(result.changedRows);
        });
    }

    static delete(id, callback) {
        db.query('DELETE FROM stocks WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            callback(result.affectedRows);
        });
    }
}

module.exports = Stock;
