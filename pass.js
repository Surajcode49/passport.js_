const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 5000;

const { connectMongoose, User } = require("./data.js");

connectMongoose();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.post("/register", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (user) return res.status(400).send("User already exists");

  const newUser = await User.create(req.body);

  res.status(201).send(newUser);
});

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(5000, (req, res) => {
  console.log(`server is runnig bro ! ${port} `);
});
