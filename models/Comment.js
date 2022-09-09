const { Comment } = require("../models");

const commentdata = [
    {
        comment: 'nice!',
        post_id: 1,
        user_id: 1
    },
    {
        comment: 'thank you!',
        post_id: 2,
        user_id: 2
    },
    {
        comment: 'Amazing!',
        post_id: 3,
        user_id: 3
    },
    {
        comment: 'send me a DM!',
        post_id: 4,
        user_id: 4
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
