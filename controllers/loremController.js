const { generateLoremIpsum } = require("../services/loremService");
const { encodeText } = require("../utils/encodingService");

// Controller to handle lorem ipsum logic
const getLoremIpsum = (req, res) => {
  const { paragraphs, words, sentences, encoding } = req.query;
  let result = "";
  if (paragraphs && words) {
    result = generateLoremIpsum(
      "generateByParagraphsAndWords",
      paragraphs,
      words
    );
  }
  // Case 2: Only words are passed
  else if (words) {
    result = generateLoremIpsum("words", words);
  } else if (sentences) {
    result = generateLoremIpsum("sentences", sentences);
  }
  // Case 3: Only paragraphs are passed (default case)
  else if (paragraphs) {
    result = generateLoremIpsum("paragraphs", paragraphs);
  } else {
    // Default: 1 paragraph with default logic
    result = generateLoremIpsum("paragraphs", paragraphs);
  }

  // Check if encoding parameter is present and true
  if (encoding === "true") {
    result = encodeText(result); // Apply encoding logic
  }

  res.json({ response: result });
};

module.exports = { getLoremIpsum };
