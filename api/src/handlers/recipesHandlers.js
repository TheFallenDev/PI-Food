const { createRecipe, searchRecipeById } = require("../controllers/recipesControllers");
const postRecipeHandler = async (req,res) => {
    const { name, details, healthScore, instructions } = req.body;
    try {
        const newRecipe = await createRecipe(name, details, healthScore, instructions);
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

const getRecipeQueryHandler = (req,res) => {
    try {
        res.status(200).send(req.query);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    postRecipeHandler,
    getRecipeParamHandler,
    getRecipeQueryHandler,
};