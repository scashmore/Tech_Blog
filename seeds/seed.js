const sequelize = require('../config/connection');
const { /*model*/ } = require('../models');

const /*model*/Data = require('.//*model*/Data.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await /*model*/.bulkCreate(/*model*/Data, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
