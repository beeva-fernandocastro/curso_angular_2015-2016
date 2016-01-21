'use strict';

var _ = require('lodash');

// Create customer
exports.create = function (req, res) {
  if (req.body.type && req.body.bodyEngine && req.body.engine && req.body.transmission &&
    req.body.finish && req.body.tires && req.body.color && req.body.cp && req.body.email) {
    res.send();
  } else {
    res.status(400).send();
  }
};
