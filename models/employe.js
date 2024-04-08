// models/employe.js
const db = require('../config/database');

class Employe {
    static getAll(callback) {
        db.query('SELECT * FROM employes', (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    static getById(id, callback) {
        db.query('SELECT * FROM employes WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    }

    static create(newEmploye, callback) {
        db.query('INSERT INTO employes SET ?', newEmploye, (err, result) => {
            if (err) throw err;
            callback(result.insertId);
        });
    }

    static update(id, updatedEmploye, callback) {
        db.query('UPDATE employes SET ? WHERE id = ?', [updatedEmploye, id], (err, result) => {
            if (err) throw err;
            callback(result.changedRows);
        });
    }

    static delete(id, callback) {
        db.query('DELETE FROM employes WHERE id = ?', [id], (err, result) => {
            if (err) throw err;
            callback(result.affectedRows);
        });
    }
}

module.exports = Employe;
