'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"categories",
          key:"id"
        },
        onUpdate:"cascade",
        onDelete:"cascade"
      },
      category_name: {
        type: Sequelize.STRING
      },
      is_published: {
        type: Sequelize.INTEGER
      },
      is_archived: {
        type: Sequelize.INTEGER
      },
      author_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"users",
          key:"id"
        },
        onUpdate:"cascade",
        onDelete:"cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('articles');
  }
};