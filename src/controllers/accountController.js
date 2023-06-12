const accountService = require('../services/accountService');

const getCredentials = async (req, res) => {
    const { body } = req;
    let email = body.email;
    let password = body.password;

    const credentials = await accountService.getCredentials(email, password);
    res.send(credentials);
};

const createUser = async (req, res) => {    
    const { body } = req;
    
    const result = await accountService.createUser(body);
    if(result){
        return res.status(200).send({ success: true});
    }
    else{
        return res.status(400).send({ error: "Ocurrio un error inesperado" });
    }
};

module.exports = {
    getCredentials,
    createUser
};