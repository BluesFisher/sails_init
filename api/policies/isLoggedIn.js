module.exports = async function(req, res, proceed) {
  console.log('isLoggedIn policies', req.url, req.query, req.path);

  //   if (req.query.phone) {
  //     return proceed();
  //   }

  //   return res.forbidden();
  return proceed();
};
