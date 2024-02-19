const mongoose = require("mongoose");

exports.cmongoose = () => {
  mongoose
    .connect("mongodb://localhost:27017/test")
    .then((e) => console.log(`connect to mongodb : ${e.connection.host}`))
    .catch((e) => console.log(e));
};

const userSchema = new mongoose.Schema({
  name: String,
  usernaeme: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
});

exports.user = mongoose.model("user", userSchema);
