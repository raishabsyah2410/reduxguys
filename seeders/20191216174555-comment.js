'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('comments', [
        {
        article_id:1,
        user_id:1,
        comment:'i dont know',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        article_id:2,
        user_id:1,
        comment:'i dont know what you want',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('comments', null, {});
  }
};
