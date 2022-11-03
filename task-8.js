const array = ["Juan", "Jun", "Angela", "Gabriel", "Miguel"];

function search(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return "We found: " + item;
    }
  }
  return "Error: Unable to search: " + item;
}

console.log(search(array, "Angela"));
