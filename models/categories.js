'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    is_published: DataTypes.INTEGER,
    is_archived: DataTypes.INTEGER
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    // categories.belongsTo(models.articles,{foreignKey:'id', as: 'articles', sourceKey:'category_id'})
  };
  return categories;
};