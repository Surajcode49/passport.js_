const mongoose = require("mongoose");
const ejs = require("ejs");

exports.connectMongoose = () => {
  mongoose
    .connect("mongodb://localhost:27017/Passport")
    .then((e) => console.log(`connect to mongodb : ${e.connection.host}`))
    .catch((e) => console.log(e));
};

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
});

exports.User = mongoose.model("User", userSchema);
