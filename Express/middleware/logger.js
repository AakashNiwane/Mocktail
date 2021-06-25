const moment = require("moment");

const logger = (req, res, next) => {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(`${fullUrl} ( ${moment().format('DD-MMM-YYYY HH:MM:SS')} )`);
  next();
};

module.exports = logger;
