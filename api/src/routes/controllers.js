// requerir los models
const { Recipe, Diet } = require('../db.js');
// axios
const axios = require('axios');
// apikey
const { API_KEY } = process.env;

// traer las recetas de la api
const getRecipesApi = async () => {
    let apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    let apiData = await apiUrl.data.results.map(r => {
        return {
            id: r.id,
            health_score: r.healthScore,
            score: r.spoonacularScore,
            name: r.title,
            img: r.image,
            summary: r.summary,
            instructions: r.analyzedInstructions,
        }
    })
    return apiData
}

// definimos los tipos de dietas que tiene la api por defecto
let diets = [
    {name: 'Gluten Free'},
    {name: 'Ketogenic'},
    {name: 'Vegetarian'},
    {name: 'Lacto-Vegetarian'},
    {name: 'Ovo-Vegetarian'},
    {name: 'Vegan'},
    {name: 'Pescetarian'},
    {name: 'Paleo'},
    {name: 'Primal'},
    {name: 'Low FODMAP'},
    {name: 'Whole30'}
]
// traemos 
const getTypesApi = async () => {
    let apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    let apiData = await apiUrl.data.results.map(r => {
        return {
            diets: r.diets
        }
    })
    
    diets.includes(apiData) 
}

const dbInfo = async () => {
    return await Recipe.findAll({
        include: Diet,
        attributes: ['name'],
        through: {
            attributes: [],
        }

    })
}

const getAllInfo = async () => {
    let apiData = await getRecipesApi()
    let dbData = await dbInfo()
    let data = [...apiData, ...dbData]
    return data
}




module.exports = {
    getRecipesApi,
    getTypesApi,
    dbInfo,
    getAllInfo
}