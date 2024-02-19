const express = require("express");
const { cmongoose, user } = require("./data.js");

const port = 4700;
const app = express();

app.use (express.json());
app.use(express.urlencoded({extended:true}));

cmongoose();

app.get("/new", (req, res) => {
  res.send("hii this is suraj");
});

app.post("/register", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (user) return res.status(400).send("user already exists");

  const newUser = await User.create(req.body);

  res.status(201).send(newUser);
});

app.listen(4700, (req, res) => {
  console.log(`server is running bro at ${port}`);
});
