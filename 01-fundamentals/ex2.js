/**
 * Ex2 — Closure Counter
 * TODOs:
 * - Implement counter() that returns a function
 * - Each call increments and returns an internal counter
 */

function counter() {
  // TODO: use a closure to keep state
}

const c = counter();
// TODO: test logs → c() → 1, c() → 2, c() → 3


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