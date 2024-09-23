const { generateLoremIpsumComp } = require("../services/loremServEncoded");
const { encodeText } = require("../utils/encodingService");

// Controller to handle lorem ipsum logic
const getLoremIpsumComp = (req, res) => {
  const { paragraphs, words, sentences, encoding } = req.query;
  let result = "";
  if (paragraphs && words) {
    result = generateLoremIpsumComp(
      "generateByParagraphsAndWords",
      paragraphs,
      words
    );
  }
  // Case 2: Only words are passed
  else if (words) {
    result = generateLoremIpsumComp("words", words);
  } else if (sentences) {
    result = generateLoremIpsumComp("sentences", sentences);
  }
  // Case 3: Only paragraphs are passed (default case)
  else if (paragraphs) {
    result = generateLoremIpsumComp("paragraphs", paragraphs);
  } else {
    // Default: 1 paragraph with default logic
    result = generateLoremIpsumComp("paragraphs", paragraphs);
  }

  // Check if encoding parameter is present and true
  if (encoding === "true") {
    result = encodeText(result); // Apply encoding logic
  }

  res.json({ encoded_response: result });
};

module.exports = { getLoremIpsumComp };
