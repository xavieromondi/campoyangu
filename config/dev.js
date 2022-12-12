require("dotenv").config();
// dev.js -  develoment keys here!!
module.exports = {
  googleClientID: process.env.googleClient,
  googleClientSecret: process.env.googleClientSecret,
  mongoURI: process.env.mongoURI,
  cookieKey: process.env.cookieKey,
};
