// controllers/clientsController.js
const Client = require('../models/Client');

exports.getAllClients = (req, res) => {
    Client.getAll((clients) => {
        res.json(clients);
    });
};

exports.getClientById = (req, res) => {
    const id = req.params.id;
    Client.getById(id, (client) => {
        res.json(client);
    });
};

exports.createClient = (req, res) => {
    const newClient = req.body;
    Client.create(newClient, (id) => {
        res.json({ message: 'Client créé', id: id });
    });
};

exports.updateClient = (req, res) => {
    const id = req.params.id;
    const updatedClient = req.body;
    Client.update(id, updatedClient, (rowsAffected) => {
        res.json({ message: 'Client mis à jour', rowsAffected: rowsAffected });
    });
};

exports.deleteClient = (req, res) => {
    const id = req.params.id;
    Client.delete(id, (rowsAffected) => {
        res.json({ message: 'Client supprimé', rowsAffected: rowsAffected });
    });
};
