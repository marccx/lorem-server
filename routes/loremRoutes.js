const express = require("express");
const { getLoremIpsum } = require("../controllers/loremController.js");

const router = express.Router();

// Route for generating lorem ipsum text
router.get("/lorem", getLoremIpsum);

module.exports = router;
