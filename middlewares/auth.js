const AuthError = require('../errors/autherror');

module.exports = (req, res, next) => {
  const token = req.headers;
  const { authorization } = req.headers;
//  const token 
   if (!authorization || !authorization.startsWith('Bearer ')) {
    return res
      .status(401)
      .send({ message: 'Необходима авторизация hhhh' });
   }

  const token = authorization.replace('Bearer ', '');
  
  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    next(new AuthError('Необходимо авторизоваться token 21'));
    next(new AuthError('Необходимо авторизоваться token 121'));
    return;
  }
