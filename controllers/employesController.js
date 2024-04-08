// controllers/employesController.js
const Employe = require('../models/Employe');

exports.getAllEmployes = (req, res) => {
    Employe.getAll((employes) => {
        res.json(employes);
    });
};

exports.getEmployeById = (req, res) => {
    const id = req.params.id;
    Employe.getById(id, (employe) => {
        res.json(employe);
    });
};

exports.createEmploye = (req, res) => {
    const newEmploye = req.body;
    Employe.create(newEmploye, (id) => {
        res.json({ message: 'Employé créé', id: id });
    });
};

exports.updateEmploye = (req, res) => {
    const id = req.params.id;
    const updatedEmploye = req.body;
    Employe.update(id, updatedEmploye, (rowsAffected) => {
        res.json({ message: 'Employé mis à jour', rowsAffected: rowsAffected });
    });
};

exports.deleteEmploye = (req, res) => {
    const id = req.params.id;
    Employe.delete(id, (rowsAffected) => {
        res.json({ message: 'Employé supprimé', rowsAffected: rowsAffected });
    });
};
