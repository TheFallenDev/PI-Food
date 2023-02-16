const { Recipe } = require("../db");
const { Op } = require('sequelize');
const { API_KEY } = process.env;
const axios = require('axios')

const createRecipe = async (title, summary, healthScore, analizedInstructions) => {
    await Recipe.create({ title, summary, healthScore, analizedInstructions });
};

const searchRecipeById = async (id, source) => {
    const recipe = source === "db" ? 
    await Recipe.findByPk(id) :
    (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)).data
    return recipe;
};

const filterApiResults = (array) => 
    array.map((element) => {
        if (element.vegetarian) element.diets.push("vegetarian");

        return {
            id: element.id,
            diets: element.diets,
            title: element.title,
            image: element.image,
        };
    });

const searchRecipeByTitle = async (title) => {
    // Agrego doble "%" para que busque la palabra en cualquier parte del string
    const recipes = await Recipe.findAll({
        where: {
            title: {
                [Op.iLike] : '%' + title + '%'
            }
        }
    });
    if(recipes.length < 100) {
        const length = 100 - recipes.length;
        const apiRawResults = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${title}&apiKey=${API_KEY}&number=${length}&addRecipeInformation=true`)).data.results;
        const apiResults = filterApiResults(apiRawResults);
        return [...recipes,...apiResults];
    }
    return recipes;
};

module.exports = { createRecipe, searchRecipeById, searchRecipeByTitle };