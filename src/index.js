const express = require('express');
const investmentsRoutes = require('./routes/InvestmentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/investments", investmentsRoutes);

app.listen(PORT, () => { 
    console.log(`Server listening on port ${PORT}`) 
});