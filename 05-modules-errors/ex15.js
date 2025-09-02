/**
 * Ex15 — safeJSON(str)
 * TODOs:
 * - Try/catch JSON.parse
 * - Return parsed object or null if it fails
 */

function safeJSON(str) {
  // TODO
  try {
    const object = JSON.parse(str);
    return object;
  } catch (error) {
    return null;
  }
}

// TODO: test logs
console.log("=== Valid JSON ===");
console.log(safeJSON('{"name":"Alice","age":25}')); 
// Expected → { name: 'Alice', age: 25 }

console.log("\n=== Invalid JSON (missing quotes) ===");
console.log(safeJSON("{name: Alice, age: 25}"));    
// Expected → null

console.log("\n=== Empty string ===");
console.log(safeJSON(""));                          
// Expected → null

console.log("\n=== Number as JSON ===");
console.log(safeJSON("42"));                        
// Expected → 42

console.log("\n=== String as JSON ===");
console.log(safeJSON('"Hello"'));                   
// Expected → "Hello"

console.log("\n=== Array as JSON ===");
console.log(safeJSON("[1, 2, 3]"));                 
// Expected → [1, 2, 3]
