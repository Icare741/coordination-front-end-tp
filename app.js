const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const commandesRouter = require('./routes/commandes');
const stocksRouter = require('./routes/stocks');
const employesRouter = require('./routes/employes');
const clientsRouter = require('./routes/clients');
const rapportsRouter = require('./routes/rapports');

app.use('/api/commandes', commandesRouter);
app.use('/api/stocks', stocksRouter);
app.use('/api/employes', employesRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/rapports', rapportsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
