const { Country, Activity } = require("../db");
const { Sequelize } = require("sequelize");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.send(activities);
  } catch (error) {
    console.log(error);
    res.send({ message: "Cannot get activities" });
  }
};

const createActivity = async (req, res) => {
  try {
    let { name, difficulty, duration, season, countries } = req.body;
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    countries.map(async (c) => {
      let activityCountry = await Country.findByPk(c);
      await newActivity.addCountry(activityCountry);
      console.log("country", activityCountry);
    });
    return res.send(newActivity);
  } catch (error) {
    console.log(error);
    return res.send("Failed activity");
  }
};

module.exports = {
  createActivity,
  getActivities,
};
