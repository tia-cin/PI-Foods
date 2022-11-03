const { Router } = require("express");
const { getAllInfo } = require("./getInfos");
const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const router = Router();

router.get("/recipes", async (req, res) => {
  const { name } = req.query;
  const allRecipes = await getAllInfo();
  try {
    if (name) {
      const search = await allRecipes.filter((r) =>
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
  const { id } = req.params;
  try {
    if (id.length < 10) {
      const recipe = await axios.get(
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
      const recipe = await Recipe.findByPk(id, { include: Diet });
      return res.json(recipe);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/types", async (req, res) => {
  try {
    const infoApi = await getAllInfo();
    const diets = infoApi.map((d) => d.diets);
    const eachDiet = diets
      .flat(1)
      .filter((val, i, curr) => curr.indexOf(val) === i);
    eachDiet.map(async (d) => {
      await Diet.findOrCreate({ where: { name: d } });
    });

    const allDiets = await Diet.findAll();
    res.send(allDiets);
  } catch (error) {
    console.log(error);
  }
});

router.post("/recipe", async (req, res) => {
  const { name, summary, score, health_score, instructions, diets, img } =
    req.body;
  try {
    const newRecipe = await Recipe.bulkCreate({
      name,
      summary,
      score,
      health_score,
      instructions,
      img,
    });

    diets.map(async (d) => {
      const recipeDiet = await Diet.findOne({
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
