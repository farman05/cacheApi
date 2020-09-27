const mainRouter = require("express").Router();


mainRouter.use("/auth", require("./auth"))
.use('/cache',require("./cache"))


module.exports = mainRouter;
