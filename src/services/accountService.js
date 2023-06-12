const account = require('../database/account');

const getCredentials = async (email, password) => { 
    result = await account.getCredentials(email, password);
    return result;
};

const createUser = async (body) => { 
    result = await account.createUser(body)
    return result;
};

module.exports = {
    getCredentials,
    createUser
}