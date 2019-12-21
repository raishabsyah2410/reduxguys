const jwt = require("jsonwebtoken");
const User = require("../models").users;

exports.login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({
    where: {
      username,
      password
    }
  }).then(user => {
    if (user) {
      const token = jwt.sign({ id: user.id }, "thisismysecretkey");
      res.send({
        user,
        token
      });
    } else {
      res.send({
        message: "Invalid login!"
      });
    }
  });
};

// exports.register = (req, res) => {
//   let input = {
//     fullname: req.body.fullname,
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password
//   }
//   User.findAll({
//     where: { username: req.body.username}
//   })
//     .then(found => {
//       // console.log(found)
//       // res.send(found)
//       if(found.length > 0) {
//         res.status(200).json({
//           msg: 'You already registered'
//         })
//       } else {
//         User.create(input)
//           .then(user => {
//             let payload = {
//               id: user.id,
//               email: user.email
//             }
//             res.status(201).json({
//               email: user.email,
//               token: generateToken(payload)
//             })
//           })
//           .catch(err => {
//             res.status(500).json({
//               msg: 'Internal Server Error',
//               Error: err
//             })
//           })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({
//         msg: 'Internal Server Error',
//         Error: err
//       })
//     })
// }