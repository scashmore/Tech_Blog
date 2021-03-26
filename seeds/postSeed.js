const { Post } = require('../models');

const postData = [
    {
        title: "HTML and CSS Tips!",
        post_content: "Find a frontend developer.",
        user_id: 1
    },
    {
        title: "JavaScript Secrets!",
        post_content: "Step one, coffee. Step two, more coffee. Step three, success.",
        user_id: 2
    },
    {
        title: "Why Coders Use Dark Mode?",
        post_content: "Light attracts bugs. Ew...",
        user_id: 3

    },
    {
        title: "SQL Databases",
        post_content: "If only there were databases of squirrels. 🐿️",
        user_id: 3
    },
    {
        title: "Handelbars!",
        post_content: "No, not the kind on your bike",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;