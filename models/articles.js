'use strict';
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    is_published: DataTypes.INTEGER,
    is_archived: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {});
  articles.associate = function(models) {
    // associations can be defined here
    articles.belongsTo(models.categories,{foreignKey:'category_id', as: 'category', sourceKey:'id'});
    articles.belongsTo(models.users,{foreignKey:'category_id', as: 'user', sourceKey:'id'});
    articles.belongsTo(models.comment,{foreignKey:'category_id', as: 'comment', sourceKey:'id'});
  };
  return articles;
};