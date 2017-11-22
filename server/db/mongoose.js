var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp'); old method
mongoose.createConnection('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
