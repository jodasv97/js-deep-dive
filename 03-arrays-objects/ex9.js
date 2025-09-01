/**
 * Ex9 — indexById
 * TODOs:
 * - With reduce, map an array to an object { [id]: object }
 */

const persons = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
  { id: 3, name: "Marta" }
];

function indexById(arr) {
  // TODO
  const indexedArr = {};
  arr.forEach(el => {
    indexedArr[el.id] = el;
  }); 
  return indexedArr;
}

// TODO: test logs with users
console.log(indexById(persons));