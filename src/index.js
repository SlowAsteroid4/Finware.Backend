const express = require('express');
const cors = require('cors');
const investmentsRoutes = require('./routes/InvestmentRoutes');
const accountsRoutes = require('./routes/AccountRoutes');

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());
app.use("/api/investments", investmentsRoutes);
app.use("/api/account", accountsRoutes);

app.listen(PORT, () => { 
    console.log(`El servidor está corriendo en el puerto: ${PORT}`) 
});