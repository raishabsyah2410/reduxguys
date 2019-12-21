const Categories = require ('../models').categories;
// const Articles = require('../models').articles;

exports.index = (req, res) => {
    Categories.findAll().then(data => res.send(data));
};

// exports.getArticleByCategories = (req,res) => {
//     Articles.findAll({
//       // attributes:{
//       //   exclude:[
//       //     "category_id",
//       //     "category_name",
//       //     "is_published",
//       //     "is_archived",
//       //     "slug",
//       //     "author_id"
//       //   ]
//       // },
//       include:[{
//         model: Categories,
//         as: 'categories',
//         attributes: {
//           exclude:[
//             "is_published",
//             "is_archived",
//             "createdAt",
//             "updatedAt"
//           ]
//         }
//       }],
//       where:{
//         category_id: req.params.category_id
//       }
//     }).then(data => res.send(data))
//   }
exports.create = (req, res) => {
  Categories.create(req.body).then(data =>
    res.send({
      message: "Success create",
      data
    })
  );
};
  exports.delete = (req, res) => {
  const { id } = req.params;

  Categories.destroy({
    where: {
      id
    }
  }).then(data => {
    res.send({
      message: "Success delete",
      data
    });
  });
};