const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'jonbon',
        email: 'jonbon@email.com',
        password: '1234Password'
    },
    {
        username: 'lolo',
        email: 'lolo@email.com',
        password: '5678Password'
    },
    {
        username: 'yourmom',
        email: 'mom@email.com',
        password: '2288Password'
    },
    {
        username: 'plug',
        email: 'plug@email.com',
        password: '7891Password'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;