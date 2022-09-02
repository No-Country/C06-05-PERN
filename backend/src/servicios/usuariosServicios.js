const { usuario } = require('../database');

class UserService {
    constructor() { }

    async create(data) {
        const newUser = await usuario.create(data);
        return newUser;
    }


}


module.exports = UserService;