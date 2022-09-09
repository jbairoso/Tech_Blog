const { Post } = require('../models');

const postdata = [
    {
        title: 'Check this out!',
        post: 'Thrifted it!',
        user_id: 1
    },
    {
        title: 'You wont believe this!', 
        post: 'Found in a dump',
        user_id: 2
    },
    {
        title: 'Your mom loves it',
        post: 'Buy it now',
        user_id: 3
    },
    {
        title: 'Sweet deal!',
        post: 'Amazon could never',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;