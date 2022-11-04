const { Router } = require("express");
const { createActivity, getActivities } = require("../controllers/activity");

const router = Router();

router.get("/", getActivities);
router.post("/", createActivity);

module.exports = router;
