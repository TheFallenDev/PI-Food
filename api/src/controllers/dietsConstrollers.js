const { Diet } = require("../db");

const createDiet = async (name) =>{
    await Diet.create({ name });
};

const searchAllDiets = async () => {
    const diets = await Diet.findAll();
    return diets;
};

module.exports = { createDiet, searchAllDiets };