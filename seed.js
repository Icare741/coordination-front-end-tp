// seed.js
const db = require('./config/database');

// Seeder pour la table des commandes
const seedCommandes = () => {
    const commandes = [
        { id: 1, article: 'Pizza', quantite: 2, table_id: 3 },
        { id: 2, article: 'Salade', quantite: 1, table_id: 1 },
        { id: 3, article: 'Pâtes', quantite: 3, table_id: 2 }
    ];

    const query = 'INSERT INTO commandes (id, article, quantite, table_id) VALUES ?';
    db.query(query, [commandes.map(commande => [commande.id, commande.article, commande.quantite, commande.table_id])], (err, result) => {
        if (err) throw err;
        console.log('Commandes seeded');
    });
};

// Seeder pour la table des stocks
const seedStocks = () => {
    const stocks = [
        { id: 1, produit: 'Tomates', quantite: 100, prix_unitaire: 0.5 },
        { id: 2, produit: 'Fromage', quantite: 50, prix_unitaire: 2 },
        { id: 3, produit: 'Pâte à pizza', quantite: 200, prix_unitaire: 1 }
    ];

    const query = 'INSERT INTO stocks (id, produit, quantite, prix_unitaire) VALUES ?';
    db.query(query, [stocks.map(stock => [stock.id, stock.produit, stock.quantite, stock.prix_unitaire])], (err, result) => {
        if (err) throw err;
        console.log('Stocks seeded');
    });
};

// Seeder pour la table des employés
const seedEmployes = () => {
    const employes = [
        { id: 1, nom: 'Jean Dupont', role: 'Serveur' },
        { id: 2, nom: 'Marie Martin', role: 'Chef de cuisine' },
        { id: 3, nom: 'Pierre Durand', role: 'Caissier' }
    ];

    const query = 'INSERT INTO employes (id, nom, role) VALUES ?';
    db.query(query, [employes.map(employe => [employe.id, employe.nom, employe.role])], (err, result) => {
        if (err) throw err;
        console.log('Employés seeded');
    });
};

// Seeder pour la table des clients
const seedClients = () => {
    const clients = [
        { id: 1, nom: 'Alice', prenom: 'Doe', email: 'alice@example.com', points_fidelite: 100 },
        { id: 2, nom: 'Bob', prenom: 'Smith', email: 'bob@example.com', points_fidelite: 50 },
        { id: 3, nom: 'Eva', prenom: 'Johnson', email: 'eva@example.com', points_fidelite: 200 }
    ];

    const query = 'INSERT INTO clients (id, nom, prenom, email, points_fidelite) VALUES ?';
    db.query(query, [clients.map(client => [client.id, client.nom, client.prenom, client.email, client.points_fidelite])], (err, result) => {
        if (err) throw err;
        console.log('Clients seeded');
    });
};

// Seeder pour la table des rapports
const seedRapports = () => {
    // add in rapport id type contenue 
    const rapports = [
        { id: 1, type: 'Mensuel', contenu: 'Rapport mensuel des ventes' },
        { id: 2, type: 'Hebdomadaire', contenu: 'Rapport hebdomadaire des stocks' },
        { id: 3, type: 'Annuel', contenu: 'Rapport annuel des employés' }
    ];
    const query = 'INSERT INTO rapports (id, type, contenu) VALUES ?';
    db.query(query, [rapports.map(rapport => [rapport.id, rapport.type, rapport.contenu])], (err, result) => {
        if (err) throw err;
        console.log('Rapports seeded');
    });
};

// Fonction pour lancer tous les seeders
const seedAll = () => {
    seedCommandes();
    seedStocks();
    seedEmployes();
    seedClients();
    seedRapports();
};

// Lancement du seeder
seedAll();
