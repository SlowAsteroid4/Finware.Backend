const investment = require('../database/investment');

const getAllInvestors = async () => { 
    result = await investment.getAllInvestors()
    return result;
};

const getOneInvestor = () => { 
    return;
};

const createNewInvestor = () => { 
    return;
};

const updateOneInvestor = () => { 
    return;
};

const deleteOneInvestor = () => { 
    return;
};

module.exports = {
    getAllInvestors,
    getOneInvestor,
    createNewInvestor,
    updateOneInvestor,
    deleteOneInvestor
}