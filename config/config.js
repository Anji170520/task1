const mongoose = require('mongoose');

const GetDatabaseConnection = mongoose
    .connect("mongodb+srv://admin:admin1234@cluster0.rvldxru.mongodb.net/Amazon")
    .then(() => console.log("Db Connection Successfull!"))
    .catch((err) => console.log(err));

module.exports = {
  GetDatabaseConnection
};