const bestSoupInTheWorld = [
  {
    name: "Pho",
    rating: 4.4,
  },
  {
    name: "Ramen",
    rating: 4.7,
  },
  {
    name: "Dashi",
    rating: 4.2,
  },
  {
    name: "Miso Soup",
    rating: 4.2,
  },
  {
    name: "Laksa",
    rating: 4.4,
  },
  {
    name: "Pozole",
    rating: 4.5,
  },
];

function sortByRating(x, y) {
  if (x.rating > y.rating) return -1;
  if (x.rating < y.rating) return 1;
  return 0;
}

console.log(bestSoupInTheWorld.sort(sortByRating));
