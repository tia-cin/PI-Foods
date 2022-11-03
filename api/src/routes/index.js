const { Router } = require("express");
const Countries = require("./country");
const Activity = require("./activity");
const { getContinents } = require("../controllers/country");

const router = Router();

router.use("/countries", Countries);
router.use("/activity", Activity);
router.get("/continents", getContinents);

module.exports = router;
