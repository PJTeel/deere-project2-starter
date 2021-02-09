'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('guestLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guestId: {
        type: Sequelize.INTEGER
      },
      lastName: {
        type: Sequelize.STRING
      },
      firstName1: {
        type: Sequelize.STRING
      },
      inviteSent: {
        type: Sequelize.BOOLEAN
      },
      rsvpRec: {
        type: Sequelize.BOOLEAN
      },
      count: {
        type: Sequelize.INTEGER
      },
      weddingGift: {
        type: Sequelize.STRING
      },
      weddingThanks: {
        type: Sequelize.BOOLEAN
      },
      showerGift: {
        type: Sequelize.STRING
      },
      showerThanks: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('guestLists');
  }
};