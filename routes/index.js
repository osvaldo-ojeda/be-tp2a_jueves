import express from "express";
const routes = express.Router();

import users from "./users.js"

routes.use("/user",users)

export default routes;
