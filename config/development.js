const administrator = require("./administrator.json");

module.exports = {
  mongoURI: `mongodb+srv://${administrator.user}:${administrator.password}@boilerplate.2pm95.mongodb.net/${administrator.db}?retryWrites=true&w=majority`,
};
