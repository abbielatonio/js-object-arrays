const list = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];

function findIndex(item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i;
    }
  }
}

console.log(findIndex(77));
