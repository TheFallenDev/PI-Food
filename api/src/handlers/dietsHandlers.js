const dietsGetHandler = (req, res) => {
    try {
        res.status(200).send("Todo funcionando en diets, por ahora :)")
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = dietsGetHandler;