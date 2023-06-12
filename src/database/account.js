const DBconnector = require('./dbconnector');

const getCredentials = async (email, password) => {     
    result = await DBconnector.getCredentials(email, password);
    return result;
};

const createUser = async (body) => {     
    result = await DBconnector.createUser(body);
    return result;
};

module.exports = {
    getCredentials,
    createUser
}