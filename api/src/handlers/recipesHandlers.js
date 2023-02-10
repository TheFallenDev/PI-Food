const { createRecipe, searchRecipeById, searchRecipeByTitle } = require("../controllers/recipesControllers");
const postRecipeHandler = async (req,res) => {
    const { title, summary, healthScore, analizedInstructions } = req.body;
    try {
        const newRecipe = await createRecipe(title, summary, healthScore, analizedInstructions);
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRecipeParamHandler = async (req,res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api"
    try {
        const recipe = await searchRecipeById(id, source);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}; 

const getRecipeQueryHandler = async (req,res) => {
    const { title } = req.query;
    try {
        const recipe = await searchRecipeByTitle(title);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    postRecipeHandler,
    getRecipeParamHandler,
    getRecipeQueryHandler,
};