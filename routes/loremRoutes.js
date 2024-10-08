const express = require("express");
const { getLoremIpsum } = require("../controllers/loremController.js");
const { getLoremIpsumComp } = require("../controllers/loremConEncoded.js");

const router = express.Router();

// Route for generating lorem ipsum text
router.get("/lorem", getLoremIpsum);
router.get("/encodedLorem", getLoremIpsumComp);

module.exports = router;
