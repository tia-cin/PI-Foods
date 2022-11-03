const { Router } = require("express");
const {
  getCountries,
  getCountry,
  filterCountries,
} = require("../controllers/country");

const router = Router();

router.get("/", getCountries);
router.get("/:id", getCountry);

module.exports = router;
