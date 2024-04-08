// models/client.js
const db = require('../config/database');

class Client {
    static getAll(callback) {
        db.query('SELECT * FROM clients', (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    static getById(id, callback) {
        db.query('SELECT * FROM clients WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    }

    static create(newClient, callback) {
        db.query('INSERT INTO clients SET ?', newClient, (err, result) => {
            if (err) throw err;
            callback(result.insertId);
        });
    }

    static update(id, updatedClient, callback) {
        db.query('UPDATE clients SET ? WHERE id = ?', [updatedClient, id], (err, result) => {
            if (err) throw err;
            callback(result.changedRows);
        });
    }

    static delete(id, callback) {
        db.query('DELETE FROM clients WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            callback(result.affectedRows);
        });
    }
}

module.exports = Client;
