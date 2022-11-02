// requerir los models
const { Recipe, Diet } = require("../db.js");
// axios
const axios = require("axios");
// apikey
const { API_KEY } = process.env;

// traer las recetas de la api
const getApiInfo = async () => {
  let apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  let apiData = await apiUrl.data.results;
  apiData.map((r) => {
    return {
      id: r.id,
      name: r.title,
      summary: r.summary,
      score: r.spoonacularScore,
      health_score: r.healthScore,
      instructions: r.analyzedInstructions,
      img: r.image,
      diets: r.diets,
    };
  });
  return apiData;
};
// traer info de la base de datos
const dbInfo = async () => {
  return await Recipe.findAll({
    include: Diet,
    attributes: ["id", "name"],
    through: {
      attributes: [],
    },
  });
};
// unir info de db y api
const getAllInfo = async () => {
  let apiData = await getApiInfo();
  let dbData = await dbInfo();
  let data = [...apiData, ...dbData];
  return data;
};

module.exports = {
  getApiInfo,
  dbInfo,
  getAllInfo,
};
