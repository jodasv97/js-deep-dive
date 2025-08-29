/**
 * Ex3 — Deep Clone
 * TODOs:
 * - Implement deepClone(obj) without sharing references
 * - Validate with nested objects and arrays
 */

function deepClone(obj) {
  // TODO: implement (structuredClone or recursion)
}

// TODO: test logs with objects and arrays
const original = {
  name: "Alice",
  age: 30,
  skills: ["JS", "TS", "Node"],
  address: {
    city: "Wonderland",
    zip: "12345"
  },
  hobbies: ["reading", "chess"],
};

// original.itself = original; // Circular reference

// structuredClone()
// const cloned = structuredClone(original);

// Deep clone Function
  function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // return primitives as-is
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone); // clone each element recursively
  }

  const clone = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]); // clone each property recursively
    }
  }
  return clone;
}

const cloned = deepClone(original);


// 1. Check structural equality
console.log("original === cloned:", original === cloned); // false (different references)
console.log("Equal content (name):", cloned.name === original.name); // true

// 2. Mutating clone does not affect original
cloned.name = "Bob";
cloned.skills.push("Angular");
cloned.address.city = "Cartago";

console.log("original.name:", original.name);   // Alice
console.log("cloned.name:", cloned.name);       // Bob

console.log("original.skills:", original.skills); // [ 'JS', 'TS', 'Node' ]
console.log("cloned.skills:", cloned.skills);     // [ 'JS', 'TS', 'Node', 'Angular' ]

console.log("original.address.city:", original.address.city); // San José
console.log("cloned.address.city:", cloned.address.city);     // Cartago