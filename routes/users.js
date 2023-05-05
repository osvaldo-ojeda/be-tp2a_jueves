import express from "express";
const users = express.Router();

users.get("/", (req, res) => {
  res.send("get User/");
});
users.get("/:id", (req, res) => {
  res.send("get User/:id");
});
users.post("/", (req, res) => {
  res.send("post User/");
});
users.put("/:id", (req, res) => {
  res.send("put User/:id");
});
users.delete("/:id", (req, res) => {
  res.send("delete User/:id");
});

export default users;
