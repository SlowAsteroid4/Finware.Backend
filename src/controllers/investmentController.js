const investmentService = require('../services/investmentService');

const getAllInvestors = async (req, res) => {
    const allInvestors = await investmentService.getAllInvestors();
    res.send(allInvestors);
};

const getInvest = async (req, res) => {
    const oneInvestor = await investmentService.getInvest(req.params.userId);
    res.send(oneInvestor);
};

const createInvest = async (req, res) => {    
    const { body } = req;
    let amount = body.amount;
    let oportunity = body.oportunity;
    let userId = req.params.userId;

    if (userId == 0) {
        return res.status(400).send({ error: "El id de usuario no puede ser 0" });
    }
    if (!amount || !oportunity || !userId) {
        return res.status(400).send({ error: "Falta algún dato dentro del request" });
    }
    if(parseInt(amount) < 0){
        return res.status(400).send({ error: "El monto no puede ser negativo" });
    }
    else if(amount > oportunity){
        return res.status(400).send({ error: "El monto no puede ser mayor que el oportunidad" });
    }
    
    const result = await investmentService.createInvest(userId, amount);
    if(result){
        return res.status(200).send({ success: true});
    }
    else{
        return res.status(400).send({ error: "Ocurrio un error inesperado" });
    }
};

module.exports = {
    getAllInvestors,
    getInvest,
    createInvest
};