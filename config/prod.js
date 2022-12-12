require("dotenv").config();
// prod.js - production keys here!!
module.exports = {
  googleClientID:
    "779829667489-18fiqvprvm43q7ksephuj7hufsukjqct.apps.googleusercontent.com",
  googleClientSecret: "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",
  mongoURI: process.env.mongoURI,
  cookieKey: process.env.cookieKey,
};
