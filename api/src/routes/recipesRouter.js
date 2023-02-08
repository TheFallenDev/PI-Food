const { Router } = require("express");
const { 
    recipeGetParamHandler, 
    recipeGetQueryHandler, 
    recipePostHandler } = require("../handlers/recipesHandlers");
const recipesRouter = Router();

recipesRouter.post("/", recipePostHandler);

recipesRouter.get("/:id", recipeGetParamHandler);

recipesRouter.get("/", recipeGetQueryHandler)

module.exports = recipesRouter;