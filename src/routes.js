const { Router } = require('express')
const routes = new Router();
const User = require('./app/models/User')

routes.get('/', async (req,res) => {
    const user = await User.create({
        name: 'Matheus Rodrigue da Cruz',
        email: 'matheus@mail.com',
        password_hash: '12345678'
    })
    return res.json(user)
})

module.exports = routes;
