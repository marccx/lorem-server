const randInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const selectRand = (words) => {
  return randInterval(0, words.length - 1);
};
module.exports = { randInterval, selectRand };
