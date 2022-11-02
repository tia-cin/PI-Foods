const { Router } = require("express");
const { getAllInfo } = require("./getInfos");
const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const router = Router();

router.get("/recipes", async (req, res) => {
  let { name } = req.query;
  let allRecipes = await getAllInfo();
  try {
    if (name) {
      let search = await allRecipes.filter((r) =>
        r.title.toLowerCase().includes(name)
      );
      if (search.length) return res.status(200).send(search);
      else return res.status(404).send("No se encontró la receta");
    }
    return res.status(200).send(allRecipes);
  } catch (error) {
    console.log(error);
  }
});

router.get("/recipes/:id", async (req, res) => {
  let { id } = req.params;
  try {
    if (id.length < 10) {
      let recipe = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      return res.json({
        id: recipe.data.id,
        name: recipe.data.title,
        img: recipe.data.image,
        diets: recipe.data.diets,
        score: recipe.data.spoonacularScore,
        health_score: recipe.data.healthScore,
        summary: recipe.data.summary,
        instructions: recipe.data.instructions,
      });
    } else {
      let recipe = await Recipe.findByPk(id, { include: Diet });
      return res.json(recipe);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/types", async (req, res) => {
  try {
    let infoApi = await getAllInfo();
    let diets = infoApi.map((d) => d.diets);
    let eachDiet = diets.map((d) => {
      for (let i = 0; i < d.length; i++) return d[i];
    });
    eachDiet.forEach((d) => {
      Diet.findOrCreate({ where: { name: d } });
    });

    let allDiets = await Diet.findAll();
    res.send(allDiets);
  } catch (error) {
    console.log(error);
  }
});

router.post("/recipe", async (req, res) => {
  let { name, summary, score, health_score, instructions, diets, img } =
    req.body;
  try {
    let newRecipe = await Recipe.bulkCreate({
      name,
      summary,
      score,
      health_score,
      instructions,
      img,
    });

    diets.map(async (d) => {
      let recipeDiet = await Diet.findOne({
        where: { name: d },
      });
      await newRecipe.addDiet(recipeDiet);
    });
    return res.send("Nueva Receta creada con éxito!");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
