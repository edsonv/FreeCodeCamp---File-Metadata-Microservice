const res = require('express/lib/response');

const fileanalyse = async (req, res, next) => {
  const { originalname: name, mimetype: type, size } = req.file;

  res.json({ name, type, size });

  next();
};

module.exports = { fileanalyse };
