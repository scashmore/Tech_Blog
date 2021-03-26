const { Comment } = require('../models');

const commentData = [
    {
        user_id: 3,
        post_id: 1,
        comment_text: "I know, right?!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "Coffee is life."
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "I see what you did there~"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We aren't talking about Handel either, are we? 🎹🎵🎵"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "🐿️"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "🐿️"
    },
    {
        user_id: 5,
        post_id: 4,
        comment_text: "🐿️"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "🐿️"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;