/**
 * Ex8 — groupBy
 * TODOs:
 * - Implement groupBy(array, key)
 * - Return an object keyed by the property value
 */

const obj = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Luis", active: false },
  { id: 3, name: "Marta", active: true },
  { id: 4, name: "Marta", active: false },
  { id: 5, name: "Daniel", active: false },
  { id: 6, name: "Leonora", active: true },
  { id: 7, name: "Meli", active: true },
];

function groupBy(arr, key) {
  // TODO
  const groups = {};
  // const values = [...new Set(arr.map((value) => value[key]))];
  // values.forEach(value => { 
  //   groups[value] = [];
  // });
  arr.forEach(element => {
    groups[element[key]] = groups[element[key]] || [];
    groups[element[key]].push(element);
  //   if (groups[element[key]]) {
  //     groups[element[key]].push(element);
  //   } else {
  //     groups[element[key]] = [];
  //     groups[element[key]].push(element);
  //   }
  });
  return groups;
}

// TODO: test logs with users and key "active"
console.log(groupBy(obj, "active"));
