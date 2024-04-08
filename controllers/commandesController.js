// controllers/commandesController.js
const Commande = require('../models/Commande');

exports.getAllCommandes = (req, res) => {
    Commande.getAll((commandes) => {
        res.json(commandes);
    });
};

exports.getCommandeById = (req, res) => {
    const id = req.params.id;
    Commande.getById(id, (commande) => {
        res.json(commande);
    });
};

exports.createCommande = (req, res) => {
    const newCommande = req.body;
    Commande.create(newCommande, (id) => {
        res.json({ message: 'Commande created', id: id });
    });
};

exports.updateCommande = (req, res) => {
    const id = req.params.id;
    const updatedCommande = req.body;
    Commande.update(id, updatedCommande, (rowsAffected) => {
        res.json({ message: 'Commande updated', rowsAffected: rowsAffected });
    });
};

exports.deleteCommande = (req, res) => {
    const id = req.params.id;
    Commande.delete(id, (rowsAffected) => {
        res.json({ message: 'Commande deleted', rowsAffected: rowsAffected });
    });
};
