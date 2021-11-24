const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { apiRecipesInfo, apiRecipeInfoById, dbInfo, allInfo } = require('./controllers')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', async (req, res) => {
    let { name } = req.query;
    let recipes = await apiRecipesInfo()
    if (name) {
        let search = await recipes.filter(r => r.name.toLowerCase().include(name.toLowerCase()))
        if (search.length) return res.status(200).send(search)
        else return res.status(404).send('No se encontró la receta')
    }
    else return res.status(200).send(recipes)

} );
router.get('/recipes/:idRecipe', )
router.get('/types', )
router.post('/recipe', )

module.exports = router;
