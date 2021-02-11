'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mailAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mailAddress.hasMany(models.guestList, {foreignKey:'guestId'});
      // define association here
    }
  };
  mailAddress.init({
    guestId: DataTypes.INTEGER,
    lastName: DataTypes.STRING,
    firstName1: DataTypes.STRING,
    firstName2: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mailAddress',
  });
  return mailAddress;
};