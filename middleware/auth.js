const { User } = require('../models/User');

let auth = (req, res, next) => {
  // 인증 처리
  // Client의 cookie에서 토큰을 가져옴
  let token = req.cookies.x_auth;

  // 토큰을 복호화한 후 유저를 찾음
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });

  // 유저가 있으면 인증 성공
  // 유저가 없으면 인증 실패
};

module.exports = { auth };
