const range = (value) => {
  const result = [];

  for (let i = 1; i <= value; i++) {
    result.push(i);
  }

  return result;
};

module.exports = range;
