const { User } = require('../models');

const userData = [
  {
    "username": "Susan",
    "email": "scashmorecitcom@gmail.com",
    "github": "heregit",
    "password": "password12345"
  },
  {
    "username": "James",
    "email": "jvash@gmail.com",
    "github": "heregit",
    "password": "password12345"
  },
  {
    "username": "Lauren",
    "email": "MLAWard@aol.com",
    "github": "heregit",
    "password": "password12345"
  },
  {
    "username": "Daniel",
    "email": "keeperman@msn.com",
    "github": "heregit",
    "password": "password12345"
  },
  {
    "username": "Nina",
    "email": "nina_art@yahoo.com",
    "github": "heregit",
    "password": "password12345"
  }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;