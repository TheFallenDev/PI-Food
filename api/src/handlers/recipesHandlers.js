const recipePostHandler = (req,res) => {
    try {
        res.status(200).send("Funciona perfectamente")
    } catch (error) {
        res.status(404);
        throw new Error(error.message)
    }
};

const recipeGetParamHandler = async (req,res) => {
    const { id } = await req.params;
    try {
        res.status(200).send(id)
    } catch (error) {
        res.status(404);
        throw new Error(error.message)
    }
};

const recipeGetQueryHandler = (req,res) => {
    try {
        res.status(200).send(req.query)
    } catch (error) {
        res.status(404);
        throw new Error(error.message)
    }
}

module.exports = {
    recipePostHandler,
    recipeGetParamHandler,
    recipeGetQueryHandler,
};