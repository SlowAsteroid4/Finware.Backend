const DBconnector = require('./dbconnector');

const getAllInvestors = async () => {     
    result = await DBconnector.getAllInvestors();
    return result;
};

module.exports = {
    getAllInvestors
}