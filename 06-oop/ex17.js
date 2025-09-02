/**
 * Ex17 — Student extends Person
 * TODOs:
 * - Extend Person
 * - Add grade property
 */

import { Person } from "./ex16.js";

class Student extends Person {
  // TODO
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  greet() {
    return `${super.greet()} and my grade is ${this.grade}`
  }  
}

// TODO: test Student
console.log("=== Create first student ===");
const s1 = new Student("Ana", 20, "A");
console.log("Name:", s1.name);     // Expected → Ana
console.log("Age:", s1.age);       // Expected → 20
console.log("Grade:", s1.grade);   // Expected → A
console.log("Greeting:", s1.greet());
// Expected → "Hi, my name is Ana and I'm 20 years old." 
// (or extended version including grade, depending on your implementation)

console.log("\n=== Create second student ===");
const s2 = new Student("Luis", 22, "B");
console.log("Name:", s2.name);     // Expected → Luis
console.log("Age:", s2.age);       // Expected → 22
console.log("Grade:", s2.grade);   // Expected → B
console.log("Greeting:", s2.greet());
// Expected → "Hi, my name is Luis and I'm 22 years old."

console.log("\n=== Create third student ===");
const s3 = new Student("Marta", 19, "C");
console.log("Name:", s3.name);     // Expected → Marta
console.log("Age:", s3.age);       // Expected → 19
console.log("Grade:", s3.grade);   // Expected → C
console.log("Greeting:", s3.greet());
// Expected → "Hi, my name is Marta and I'm 19 years old."
