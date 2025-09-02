/**
 * Ex14 — App using math.mjs
 * TODOs:
 * - Import functions
 * - Call them and log results
 */

// TODO: import and logs
import { sum, sub, mul, div } from "./math.mjs"


console.log("=== Basic operations ===");
console.log("sum(5, 3) =", sum(5, 3));
console.log("sub(5, 3) =", sub(5, 3));
console.log("mul(5, 3) =", mul(5, 3));
console.log("div(6, 3) =", div(6, 3));

console.log("\n=== With negatives ===");
console.log("sum(-5, 3) =", sum(-5, 3));
console.log("sub(-5, 3) =", sub(-5, 3));
console.log("mul(-5, -2) =", mul(-5, -2));
console.log("div(-6, 2) =", div(-6, 2));

console.log("\n=== Edge cases ===");
console.log("mul(42, 0) =", mul(42, 0));
try {
  console.log("div(10, 0) =", div(10, 0));
} catch (err) {
  console.log("div(10, 0) threw an error:", err.message);
}