const { Router } = require("express");
const dietsGetHandler = require("../handlers/dietsHandlers");
const dietsRouter = Router();

dietsRouter.get("/", dietsGetHandler)

module.exports = dietsRouter;