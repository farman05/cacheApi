const mainRouter = require("express").Router();


mainRouter.use("/auth", require("./auth"));


module.exports = mainRouter;
