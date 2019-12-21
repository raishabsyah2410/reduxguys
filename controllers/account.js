const Accounts = require("../models").accounts;

exports.index = (req, res) => {
  Accounts.findAll().then(data => res.send(data));
};

exports.show = (req, res) => {
  const { id } = req.params;

  Accounts.findOne({
    where: {
      id
    }
  }).then(data => res.send(data));
};

exports.create = (req, res) => {
  Accounts.create(req.body).then(data =>
    res.send({
      message: "Success create",
      data
    })
  );
};

exports.update = (req, res) => {
  const { id } = req.params;

  Accounts.update(req.body, {
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

  Accounts.destroy({
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