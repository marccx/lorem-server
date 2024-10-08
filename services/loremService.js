const { randInterval, selectRand } = require("../utils/utils.js");
const fs = require("fs");
const data = fs.readFileSync("words.json", "utf8");
const jsonData = JSON.parse(data);

const generateLoremIpsum = (type, amount, param2) => {
  let result = "";

  switch (type) {
    case "paragraphsAndWords":
      result = generateByParagraphsAndWords(amount, param2);
      break;
    case "words":
      result = generateByWords(amount);
      break;
    case "sentences":
      result = generateBySentences(amount);
      break;
    case "paragraphs":
      result = generateByParagraphs(amount);
      break;
    default:
      result = generateByParagraphs(1); // Default 1 paragraph
  }

  return result;
};

const generateByWords = (words) => {
  // Logic for generating words
  let result = "";
  for (let i = 0; i < words; i++) {
    result += " " + jsonData[selectRand(jsonData)].toLowerCase();
  }
  return Array(result);
};

const generateBySentences = (sentences) => {
  // Logic for generating sentences
  let result = "";
  let resultWords = [];
  for (let i = 0; i < sentences; i++) {
    result += generateByWords(randInterval(15, 20)) + ".";
  }
  resultWords.push(result);

  return resultWords;
};

const generateByParagraphs = (paragraphs) => {
  // Logic for generating paragraphs
  let paragraph = "";
  let resultParagraphs = [];
  // x amount of paragraphs
  for (let x = 0; x < paragraphs; x++) {
    // 5 Sentences
    paragraph += generateBySentences(5);

    resultParagraphs.push(paragraph);
    // clear current paragraph
    paragraph = "";
  }
  return resultParagraphs;
};

module.exports = { generateLoremIpsum };
