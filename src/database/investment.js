const DBconnector = require('./dbconnector');

const getAllInvestors = async () => {     
    result = await DBconnector.getAllInvestors();
    return result;
};

const getInvest = async (userId) => {     
    result = await DBconnector.getInvest(userId);
    return result;
};

const createInvest = async (userId, amount) => {     
    result = await DBconnector.createInvest(userId, amount);
    return result;
};

module.exports = {
    getAllInvestors,
    getInvest,
    createInvest
}