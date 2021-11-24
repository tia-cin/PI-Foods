// requerir los models
const { Recipe, Diet } = require('../db.js');
// axios
const axios = require('axios');
// apikey
const { API_KEY } = process.env;

const getRecipesApi = async () => {
    let apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
}

const apiRecipesInfo = async () => {
    let apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true`)
    let apiData = await apiUrl.data.map(r => {
        return {
            name: r.titleMatch,
            diet: r.diet,
            query: r.query
        }
    })
    return apiData
}

const apiRecipeInfoById = async (id) => {
    let apiUrl = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`)
    let apiData = await apiUrl.data.map(r => {
        return {
            id: r.id,
            name: r.title, 
            img: r.image,
            health_score: r.healthScore,
            diets: r.diets,
            isVegan: r.vegan,
            isVegetarian: r.vegetarian,
            idGlutenFree: r.glutenFree,
            summary: r.summary,
            score: r.aggregateLikes,
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

const allInfo = async () => {
    let apiData = await apiRecipesInfo();
    let dbData = await dbInfo();
    let allData = [...apiData, ...dbData]
    return allData
}



module.exports = {
    apiRecipesInfo,
    apiRecipeInfoById,
    dbInfo,
    allInfo,
}