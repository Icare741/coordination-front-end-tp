// models/commande.js
const db = require('../config/database');

class Commande {
    static getAll(callback) {
        db.query('SELECT * FROM commandes', (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    static getById(id, callback) {
        db.query('SELECT * FROM commandes WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    }

    static create(newCommande, callback) {
        db.query('INSERT INTO commandes SET ?', newCommande, (err, result) => {
            if (err) throw err;
            callback(result.insertId);
        });
    }

    static update(id, updatedCommande, callback) {
        db.query('UPDATE commandes SET ? WHERE id = ?', [updatedCommande, id], (err, result) => {
            if (err) throw err;
            callback(result.changedRows);
        });
    }

    static delete(id, callback) {
        db.query('DELETE FROM commandes WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            callback(result.affectedRows);
        });
    }
}

module.exports = Commande;
