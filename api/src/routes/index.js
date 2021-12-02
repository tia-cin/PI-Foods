const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// requerimos controllers
const { getApiInfo, dbInfo, getAllInfo } = require('./getInfos')
// requirimos los models
const { Recipe, Diet } = require('../db')
// requerimos axios
const axios = require('axios')
// requerimos la apiKey
const { API_KEY } = process.env

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ruta para obtener todas las recetas
router.get('/recipes', async (req, res) => {
    let { name, order, page, diet } = req.query;
    let recipesPerPage = 9;
    let allRecipes = await getAllInfo();
    page = page ? page : 1

    // filter recipes
    switch(order) {
        case 'descendant':
            allRecipes = allRecipes.sort((a, b) => {
                b.name.localeCompare(a.name)
            })
        
        default:
            allRecipes = allRecipes.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
    }
    
    // get recipe by name
    if (name) {
        let search = await allRecipes.filter(r => r.name.includes(name))
        if (search.length) return res.status(200).send(search)
        else return res.status(404).send('No se encontró la receta')
    }

    // filtrado por dietas
    if(diet) {
        let search = await allRecipes.filter(r => r.diets.includes(diet))
        if (search.length) res.status(200).send(search)
        else return res.status(404).send('No se encontraron recetas de esa dieta')
    }

    // paginado
    let recipes = allRecipes.slice((recipesPerPage * (page - 1)), (recipesPerPage * (page - 1) + recipesPerPage))
    
    return res.status(200).send(recipes)
} );


// ruta para obtener una receta por id de la misma
router.get('/recipes/:idReceta', async (req, res) => {
    let { idReceta } = req.params
    if (idReceta.length < 10) {
        let recipe = await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${API_KEY}`)
        return res.json({
                id: recipe.data.id,
                name: recipe.data.title,
                img: recipe.data.image,
                diets: recipe.data.diets,
                score: recipe.data.spoonacularScore,
                health_score: recipe.data.healthScore,
                summary: recipe.data.summary,
                instructions: recipe.data.instructions
        })
    }
    else {
        let recipe = await Recipe.findByPk(idReceta, { include: Diet })
        return res.json(recipe)
    }
})


// ruta para obtener los tipos de dietas
router.get('/types', async (req, res) => {
    let infoApi = await getAllInfo()
    let diets = infoApi.map(d => d.diets)
    let eachDiet = diets.map(d => {for (let i = 0; i < d.length; i++) return d[i]})
    eachDiet.push('ketogenic', 'vegetarian', 'lacto vegetarian', 'ovo vegetarian', 'vegan', 'pescetarian', 'paleo', 'primal', 'low fodmap', 'whole30')
    eachDiet.forEach(d => {
        Diet.findOrCreate({ where: { name: d } })
    });
    
    let allDiets = await Diet.findAll()
    res.send(allDiets.map(d => d.name))
})


// ruta para puclicar receta personalizada por el usuario
router.post('/recipe', async (req, res) => {
    let { name, summary, score, health_score, instructions, diets, createRecipe } = req.body;
    let newRecipe = await Recipe.create({
        name, 
        summary,
        score,
        health_score,
        instructions,
        createRecipe
    }) 
    let recipeDiet = await Diet.findAll({ where: { name: diets } })
    newRecipe.addDiet(recipeDiet)
    res.send('Nueva Receta creada con éxito!')
})

module.exports = router;
