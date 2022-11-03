const { Router } = require("express");
const Countries = require("./country");
const Activity = require("./activity");

const router = Router();

router.use("/countries", Countries);
router.use("/activity", Activity);

module.exports = router;
