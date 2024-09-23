const { randomIntFromInterval } = require("../utils/utils.js");
const fs = require("fs");
const data = fs.readFileSync("words.json", "utf8");
const jsonData = JSON.parse(data);

const generateLoremIpsumComp = (type, param1, param2) => {
  let result = "";

  switch (type) {
    case "paragraphsAndWords":
      result = generateByParagraphsAndWords(param1, param2);
      break;
    case "words":
      result = generateByWords(param1);
      break;
    case "sentences":
      result = generateBySentences(param1);
      break;
    case "paragraphs":
      result = generateByParagraphs(param1);
      break;
    default:
      result = generateByParagraphs(1); // Default 1 paragraph
  }

  return result;
};

const generateByWords = (words) => {
  // Logic for generating words
  let result = "";
  let resultWords = [];
  for (let i = 0; i < words; i++) {
    let randomNum = randomIntFromInterval(0, jsonData.length - 1);
    result = result + " " + randomNum;
  }
  result += ".";
  resultWords.push(result);

  return resultWords;
};

const generateBySentences = (sentences) => {
  // Logic for generating sentences
  let result = "";
  let resultWords = [];
  for (let i = 0; i < sentences; i++) {
    let seqWords = randomIntFromInterval(15, 20);
    for (let j = 0; j < seqWords; j++) {
      let randomNum = randomIntFromInterval(0, jsonData.length - 1);
      result = result + " " + randomNum;
    }
    result = result + ".";
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
    for (let i = 0; i < 5; i++) {
      let seqWords = randomIntFromInterval(15, 20);
      // 1 Sentence with a rand number of words between 15 and 20 as described above
      for (let j = 0; j < seqWords; j++) {
        let randomNum = randomIntFromInterval(0, jsonData.length - 1);
        paragraph += " " + randomNum;
      }
      paragraph += ".";
    }
    resultParagraphs.push(paragraph);
    paragraph = "";
  }

  return resultParagraphs;
};

module.exports = { generateLoremIpsumComp };
