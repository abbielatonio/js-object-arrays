const input = [1, 2, "5", 3];

function theAverageOf(input) {
  let average = 0;
  for (let i = 0; i < input.length; i++)
    if (typeof input[i] === "number") {
      average += input.reduce((input) => input) / input.length;
    }
  return average;
}

console.log(theAverageOf(input));
