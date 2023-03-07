const { Recipe, Diet } = require("../db");
const { Op } = require('sequelize');
const { API_KEY } = process.env;
const axios = require('axios')

const image = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'

const createRecipe = async (title, summary, healthScore, instructions, diets) => {
    const recipe = await Recipe.create({ 
        title, 
        summary, 
        healthScore, 
        instructions,
        image:image,
    });
    await recipe.addDiets(diets)
};

const searchRecipeById = async (id, source) => {
    const recipe = source === "db" ? 
    await Recipe.findByPk(id) :
    (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)).data
    return recipe;
};

const searchRecipeByTitle = async (title) => {
    // Agrego doble "%" para que busque la palabra en cualquier parte del string
    const recipes = await Recipe.findAll({
        where: {
            title: {
                [Op.iLike] : '%' + title + '%'
            }
        },
        include: Diet,
    });
     if(recipes.length < 100) {
        const length = 100 - recipes.length;
        const apiResults = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${title}&apiKey=${API_KEY}&number=${length}&addRecipeInformation=true`)).data.results;
        let response = [...recipes,...apiResults];
        return response;
    }
    return recipes;
};

module.exports = { createRecipe, searchRecipeById, searchRecipeByTitle };