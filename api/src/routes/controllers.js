// requerir los models
const { Recipe, Diet } = require('../db.js');
// axios
const axios = require('axios');
// apikey
const { API_KEY } = process.env;

const getRecipesApi = async () => {
    let apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    let apiData = await apiUrl.data.results.map(r => {
        return {
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

const getTypesApi = async () => {
    let apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    let apiData = await apiUrl.data.results.map(r => {
        return {
            diets: r.diets,
            isVegetarian: r.vegetarian,
            isVegan: r.vegan,
            isGlutenFree: r.glutenFree,
        }
    })
    return apiData
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





module.exports = {
    getRecipesApi,
    getTypesApi,
    dbInfo,
    allInfo,
}