const investmentService = require('../services/investmentService');

const getAllInvestors = async (req, res) => {
    const allInvestors = await investmentService.getAllInvestors();
    res.send(allInvestors);
};

const getOneInvestor = (req, res) => {
    const oneInvestor = investmentService.getOneInvestor(req.params.userId);
    res.send("Te un inversor");
};

const createNewInvestor = (req, res) => {
    const newInvestor = investmentService.createNewInvestor(req.params.userId);
    res.send("Se creó un nuevo inversor");
};

const updateOneInvestor = (req, res) => {
    const updateInvestor = investmentService.updateOneInvestor(req.params.userId);
    res.send("Se actualizó el inversor");
};

const deleteOneInvestor = (req, res) => {
    const deleteInvestor = investmentService.deleteOneInvestor(req.params.userId);
    res.send("Se eliminó el inversor");
};

module.exports = {
    getAllInvestors,
    getOneInvestor,
    createNewInvestor,
    updateOneInvestor,
    deleteOneInvestor
};