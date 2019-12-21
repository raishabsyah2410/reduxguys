'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [
        {
        name: 'Archer',
        is_published :1,
        is_archived:0,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Swimming',
        is_published :1,
        is_archived:0,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Fitness',
        is_published :1,
        is_archived:0,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});
  }
};
