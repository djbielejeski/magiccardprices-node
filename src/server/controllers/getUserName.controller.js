const os = require('os');

var getUserNameController = module.exports;

getUserNameController.getUserName = function(req, res) {
  res.send({ username: os.userInfo().username });
};
