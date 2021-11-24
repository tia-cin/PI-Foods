const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getRecipesApi, getTypesApi, dbInfo } = require('./controllers')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', async (req, res) => {
    let { name } = req.query;
    let recipes = await getRecipesApi()
    if (name) {
        let search = await recipes.filter(r => r.name.toLowerCase().include(name.toLowerCase()))
        if (search.length) return res.status(200).send(search)
        else return res.status(404).send('No se encontró la receta')
    }
    else return res.status(200).send(recipes)

} );

router.get('/recipes/:idRecipe', async (req, res) => {
    let { idRecipe } = req.params;

})

router.get('/types', async (req, res) => {
    let types = await getTypesApi()
    res.send(types)
})

router.post('/recipe', async (req, res) => {

})

module.exports = router;
