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
  address: {
    city: "Wonderland",
    zip: "12345"
  },
  hobbies: ["reading", "chess"],
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

original.itself = original; // Circular reference

// Deep Clone Function
const clone = structuredClone(original);

console.log('--- Original Object ---');
console.log(original);
console.log('--- Cloned Object ---');
console.log(clone);