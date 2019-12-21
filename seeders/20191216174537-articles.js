'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('articles', [
        {
        title:'How to Kill human',
        content:'Former Conservative MP Michael Portillo pushes his body to the brink of death in an investigation into the science of executionAs the American Supreme Court examines whether the lethal injection is causing prisoners to die in unnecessary pain',
        image:'https://thoughtcatalog.files.wordpress.com/2013/12/shutterstock_107145812.jpg?w=1200&resize=1200,902&quality=95&strip=all&crop=1',
        category_id:1,
        is_published:1,
        is_archived:1,
        author_id:1,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        title:'How to Fishing',
        content:'Whether you’re looking to spend time with friends and family or catch dinner, fishing is a great way to enjoy the outdoors.',
        image:'https://www.wikihow.com/images/thumb/2/28/Fish-Step-1-Version-2.jpg/aid20242-v4-728px-Fish-Step-1-Version-2.jpg.webp',
        category_id:1,
        is_published:1,
        is_archived:1,
        author_id:1,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    ], {});
    },
  
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('articles', null, {});

  }
};
