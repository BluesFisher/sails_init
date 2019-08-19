module.exports = function getUserInfo(req, res) {
  const { phone } = req.allParams();

  Account.find({ phone }).exec((err, user) => {
    if (err) {
      return res.serverError(err);
    }
    return res.json(user);
  });
};
