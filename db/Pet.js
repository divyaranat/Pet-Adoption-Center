const {Sequelize, sequelize} = require('./db');

const Pet = sequelize.define('pet', {
  name: Sequelize.STRING,
  breed: Sequelize.STRING,
  age: Sequelize.INTEGER,
  weight: Sequelize.INTEGER,
});

Pet.associate = function(models) {
  Pet.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
  });
};

module.exports = { Pet };
