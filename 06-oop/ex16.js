/**
 * Ex16 — Class Person
 * TODOs:
 * - Properties: name, age
 * - Method: greet()
 */

export class Person {
  // TODO
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`
  }
}

// TODO: instance and greet test
// console.log("=== Create first person ===");
// const p1 = new Person("Ana", 25);
// console.log("Name:", p1.name);       // Expected → Ana
// console.log("Age:", p1.age);         // Expected → 25
// console.log("Greeting:", p1.greet()); // Expected → "Hello, my name is Ana and I am 25 years old."

// console.log("\n=== Create second person ===");
// const p2 = new Person("Luis", 30);
// console.log("Name:", p2.name);        // Expected → Luis
// console.log("Age:", p2.age);          // Expected → 30
// console.log("Greeting:", p2.greet()); // Expected → "Hello, my name is Luis and I am 30 years old."

// console.log("\n=== Create third person ===");
// const p3 = new Person("Marta", 18);
// console.log("Name:", p3.name);        // Expected → Marta
// console.log("Age:", p3.age);          // Expected → 18
// console.log("Greeting:", p3.greet()); // Expected → "Hello, my name is Marta and I am 18 years old."

