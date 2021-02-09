'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guestList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  guestList.init({
    guestId: DataTypes.INTEGER,
    lastName: DataTypes.STRING,
    firstName1: DataTypes.STRING,
    inviteSent: DataTypes.BOOLEAN,
    rsvpRec: DataTypes.BOOLEAN,
    count: DataTypes.INTEGER,
    weddingGift: DataTypes.STRING,
    weddingThanks: DataTypes.BOOLEAN,
    showerGift: DataTypes.STRING,
    showerThanks: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'guestList',
  });
  return guestList;
};