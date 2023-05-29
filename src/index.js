const express = require('express');
const investmentsRoutes = require('./routes/InvestmentRoutes');

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use("/api/investments", investmentsRoutes);

app.listen(PORT, () => { 
    console.log(`El servidor está corriendo en el puerto: ${PORT}`) 
});