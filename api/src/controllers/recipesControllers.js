const { Recipe } = require("../db");
const { API_KEY } = process.env;
const axios = require('axios')

const createRecipe = async (name, details, healthScore, instructions) => {
    await Recipe.create({ name, details, healthScore, instructions });
};

const searchRecipeById = async (id, source) => {
    const recipe = source === "db" ? 
    await Recipe.findByPk(id) :
    await (axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)).data
    console.log(recipe);
    return recipe;
}

module.exports = { createRecipe, searchRecipeById };