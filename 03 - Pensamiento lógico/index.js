const { filterOdd, range } = require("./utils");

if (process.argv.length < 3) {
  console.error("Se necesita un número como argumento");
  process.exit(1);
}

let parameter = process.argv[2];

if (isNaN(parameter)) {
  console.error("El argumento debe ser un número");
  process.exit(1);
}

parameter = parseInt(parameter);

const rangeOfNumbers = range(parameter);
const rangeOdd = filterOdd(rangeOfNumbers);

console.log({
  parameter,
  rangeOfNumbers,
  rangeOdd,
});
