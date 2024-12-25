const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const AuthError = require('../errors/autherror');

module.exports = (req, res, next) => {
  const token = req.headers;

  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    next(new AuthError('Необходимо авторизоваться token 21'));
    return;
  }

  req.user = payload;

  next();
};
// авторизация на локале
