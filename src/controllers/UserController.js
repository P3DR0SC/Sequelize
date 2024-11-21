const User = require('../model/User');

module.exports = {
    async index(req,res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async store(req,res) {
        const { name, email} = req.body;

        const user = await User.create({ name, email });

        return res.json(user);
    },

    async updateUser(req, res) {
        const {id} = req.params

        const {name, email} = req.body

        const user = await User.findByPk(id)

        await user.update({name,email})

        return res.json(user)
    },
    
    updateUserPatch(req,res) {
        return true
    },

    async deleteUser(req, res) {
        const {id} = req.params;

        const user = await User.findByPk(id)

        await user.destroy()

        return res.json("ok") 
    }

};