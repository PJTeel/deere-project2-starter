"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "guestLists",
            [
                {
                    guestId: 1,
                    firstName1: "John",
                    lastName: "Smith",
                    inviteSent: true,
                    rsvpRec: true,
                    count: 3,
                    weddingGift: "bowl",
                    weddingThanks: true,
                    showerGift: "spoon",
                    showerThanks: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    guestId: 2,
                    firstName1: "Rachel",
                    lastName: "Green",
                    inviteSent: true,
                    rsvpRec: true,
                    count: 3,
                    weddingGift: "bowl",
                    weddingThanks: true,
                    showerGift: "spoon",
                    showerThanks: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ],
            {}
        );
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('guestLists', null, {});
  },
};