const { createDiet, searchAllDiets } = require("../controllers/dietsConstrollers");
// Para precargar las dietas en la base de datos unicamente una vez.
//const dietsArray = ["lacto-ovo-vegetarian","vegan","glutenfree","ketogenic","pescetarian","primal","paleo","lowfodmap","whole30"] 

const dietsGetHandler = async (req, res) => {
    try {
        /* dietsArray.forEach(async diet => {
            await createDiet(diet);
        }); */
        const diets = await searchAllDiets();
        res.status(200).json(diets);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = dietsGetHandler;