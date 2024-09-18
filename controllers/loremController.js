const { randomIntFromInterval } = require("../utils/utils.js");
const fs = require("fs");
const data = fs.readFileSync("words.json", "utf8");
const jsonData = JSON.parse(data);

// Controller to handle lorem ipsum logic
const getLoremIpsum = (req, res) => {
  const { paragraphs, words, sentences } = req.query;
  let result = "";
  if (paragraphs && words) {
    result = generateLoremIpsumByParagraphsAndWords(
      parseInt(paragraphs),
      parseInt(words)
    );
  }
  // Case 2: Only words are passed
  else if (words) {
    result = generateLoremIpsumByWords(parseInt(words));
  } else if (sentences) {
    result = generateLoremIpsumBySentences(parseInt(sentences));
  }
  // Case 3: Only paragraphs are passed (default case)
  else if (paragraphs) {
    result = generateLoremIpsumByParagraphs(parseInt(paragraphs));
  } else {
    // Default: 1 paragraph with default logic
    result = generateLoremIpsumByParagraphs(1);
  }

  res.json({ response: result });
};

module.exports = { getLoremIpsum };

function generateLoremIpsumByParagraphs(paragraphs) {
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
        paragraph += " " + jsonData[randomNum];
      }
      paragraph += ".";
    }
    resultParagraphs.push(paragraph);
    paragraph = "";
  }
  return resultParagraphs;
}

function generateLoremIpsumBySentences(sentences) {
  let result = "";
  let resultWords = [];
  for (let i = 0; i < sentences; i++) {
    let seqWords = randomIntFromInterval(15, 20);
    for (let j = 0; j < seqWords; j++) {
      let randomNum = randomIntFromInterval(0, jsonData.length - 1);
      result = result + " " + jsonData[randomNum];
    }
    result = result + ".";
  }
  resultWords.push(result);
  return resultWords;
}
function generateLoremIpsumByWords(words) {
  let result = "";
  let resultWords = [];
  for (let i = 0; i < words; i++) {
    let randomNum = randomIntFromInterval(0, jsonData.length - 1);
    result = result + " " + jsonData[randomNum].toLowerCase();
  }
  result += ".";
  resultWords.push(result);
  return resultWords;
}

function generateLoremIpsumByParagraphsAndWords(paragraphs, wordsPerParagraph) {
  let result = "";
  for (let x = 0; x < paragraphs; x++) {
    let paragraph = generateLoremParagraph(wordsPerParagraph);
    result += paragraph + "";
  }
  return result.trim();
}

function generateLoremParagraph(words = randomIntFromInterval(40, 60)) {
  let paragraph = "";
  for (let i = 0; i < words; i++) {
    let randomNum = randomIntFromInterval(0, jsonData.length - 1);
    paragraph += jsonData[randomNum] + " ";
  }
  return paragraph.trim() + ".";
}
