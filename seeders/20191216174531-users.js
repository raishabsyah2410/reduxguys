'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', [
        {
        fullname:'Jhon Cena' ,
        username:'@Jcena' ,
        email:'jhoncena@email.com',
        password:'123456' ,
        is_active:1,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        fullname:'undertaker' ,
        username:'@Utaker' ,
        email:'undertaker@email.com',
        password:'123456' ,
        is_active:1,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        fullname:'kane' ,
        username:'@kane' ,
        email:'kane@email.com',
        password:'123456' ,
        is_active:1,
        createdAt:new Date(),
        updatedAt:new Date(),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('users', null, {});
  }
};
