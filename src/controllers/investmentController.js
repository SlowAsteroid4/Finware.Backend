const getAllInvestors = (req, res) => {
    res.send("Te doy todos los inversores");
};

const getOneInvestor = (req, res) => {
    res.send("Te un inversor");
};

const createNewInvestor = (req, res) => {
    res.send("Se creó un nuevo inversor");
};

const updateOneInvestor = (req, res) => {
    res.send("Se actualizó el inversor");
};

const deleteOneInvestor = (req, res) => {
    res.send("Se eliminó el inversor");
};

module.exports = {
    getAllInvestors,
    getOneInvestor,
    createNewInvestor,
    updateOneInvestor,
    deleteOneInvestor
};