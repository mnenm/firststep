
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.sendfile();
  if (process.env.NODE_ENV === "production") {
    res.sendfile('public/build/first_step/production');
  } else {
    res.sendfile('public');
  }
};
