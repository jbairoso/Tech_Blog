const seedUsers = require('./User');
const seedPosts = require('./Post');
const seedComments = require('./Comment');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedPosts();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    process.exit(0);
};

seedAll();