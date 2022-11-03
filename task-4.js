const input = [1, 2, "5", 3];

function theSumOf(input) {
  let total = 0;
  for (var i = 0; i < input.length; i++)
    if (typeof input[i] === "number") {
      total += Number(input[i]);
    }
  return total;
}

console.log(theSumOf(input));
