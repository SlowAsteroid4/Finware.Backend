const investment = require('../database/investment');

const getAllInvestors = async () => { 
    result = await investment.getAllInvestors()
    return result;
};

const getInvest = async (userId) => { 
    result = await investment.getInvest(userId)
    return result;
};

const createInvest = async (userId, amount) => { 
    result = await investment.createInvest(userId, amount)
    return result;
};

module.exports = {
    getAllInvestors,
    getInvest,
    createInvest
}