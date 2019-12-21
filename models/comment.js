'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.categories,{foreignKey:'user_id', as: 'category', sourceKey:'id'});
    comment.belongsTo(models.users,{foreignKey:'user_id', as: 'user', sourceKey:'id'});
  };
  return comment;
};