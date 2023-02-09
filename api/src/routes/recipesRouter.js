const { Router } = require("express");
const { 
    getRecipeParamHandler, 
    getRecipeQueryHandler, 
    postRecipeHandler } = require("../handlers/recipesHandlers");
const recipesRouter = Router();

recipesRouter.post("/", postRecipeHandler);

recipesRouter.get("/:id", getRecipeParamHandler);

recipesRouter.get("/", getRecipeQueryHandler)

module.exports = recipesRouter;