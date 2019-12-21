const Articles = require("../models").articles;
const categories = require("../models").categories;
const users = require("../models").users;
const comments = require ("../models").comment;
// const Accounts = require("../models").accounts;

// const dataM = data => {
//   const newData = data.map(item => {
//     let newItem = {
//       title: item.title,
//       accountId: item.account_id,
//       email: item.user.email,
//       username: item.user.username
//     };
//     return newItem;
//   });
//   return newData;
// };
exports.index = (req, res) => {
  Articles.findAll().then(data => res.send(data));
};

exports.ascending=(req, res)=>{
  Articles.findAll({
    order:[
      ['id','DESC']
    ]
  }).then(data =>res.send(data))
};

exports.getCat= (req, res) => {
  const {
      category_id
  } = req.params;

  Articles.findAll({
      include: [{
          model: categories,
          as: "category",
          where: {
              id : category_id
          }
      }]
  }).then(data => {
      res.send(data);
  });
};

exports.getUser= (req, res) => {
  const {
      user_id
  } = req.params;

  Articles.findAll({
      include: [{
          model: users,
          as: "user",
          where: {
              id : user_id
          }
      }]
  }).then(data => {
      res.send(data);
  });
};
const result = (data, detail,cat)=>{
  let newItem = {
    title: data.title,
    content:data.content,
    image:data.iamge,
    category:{
      id:data.author_id,
      name:cat.name
    },
    createBy:{
      id:data.author_id,
      name:detail.email
    },
    createAt :data.createAt,
    updateAt :data.updateAt
  };
  return newItem;
};
// exports.create = (req, res) => {
//   Articles.create(req.body).then(data =>{
//     users.findOne({
//       where:{
//         id: data.author_id
//       }
//     }).then(detail =>{
//       Articles.findOne({
//         where: {
//           id: data.category_id
//         }
//       }).then(cat =>{
//         const format = result(data,detail,cat);
//         res.send(format);
//       });
//     });
//   });
// };

exports.create = (req, res) => {
  Articles.create(req.body).then(data =>
    res.send({
      message: "Success create",
      data
    })
  );
};
exports.getArticle = (req, res) => {
  const { account_id } = req.params;

  Articles.findAll({
    include: [
      {
        model: Accounts,
        as: "user",
        where: {
          id: account_id
        }
      }
    ]
  }).then(data => {
    res.send(dataM(data));
  });
};

exports.update = (req, res) => {
  const { id } = req.params;

  Articles.update(req.body, {
    where: {
      id
    }
  }).then(data => {
    res.send({
      message: "Success update",
      data
    });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Articles.destroy({
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

exports.show = (req, res) => {
  const { id } = req.params;

  Articles.findOne({
    where: {
      id
    }
  }).then(data => res.send(data));
};

exports.detail = (req, res) => {
  const { id } = req.params;
  Articles.findOne({
    attributes: {
      exclude: [
        "createdAt",
        "updatedAt",
        "category_id",
        "author_id",
        "is_published",
        "is_archived"
      ]
    },
    where: {
      id: id
    },
    include: [
      {
        model: categories,
        as: "category",
        attributes: {
          exclude: ["createdAt", "updatedAt", "is_published", "is_archived"]
        },
        where: {
          is_published: true,
          is_archived: false
        }
      },
      {
        model: users,
        as: "user",
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "is_published",
            "is_archived",
            "is_active",
            "password"
          ]
        },
        where: {
          is_active: true
        }
      },
      {
        model: comments,
        as: "comment",
        attributes: {
          exclude: ["createdAt", "updatedAt", "user_id", "article_id"]
        },
        include: [
          {
            model: users,
            as: "user",
            attributes: {
              exclude: ["createdAt", "updatedAt", "is_active", "password"]
            }
          }
        ]
      }
      // {
      //   model: Users,
      //   as: "User"
      // }
    ]
  }).then(data => res.send(data));
  // .catch(err => {
  //   res.status(500);
  //   res.send(err);
  // });
};