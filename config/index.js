var configValues = require('./config');

module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
    '@ds155529.mlab.com:55529/node-todo-dev';
  }
};
