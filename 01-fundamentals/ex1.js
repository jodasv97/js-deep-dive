/**
 * EXERCISE 1 — Strict vs Loose Equality and Primitives
 * Execute:  node 01-fundamentos/ej1.js
 */

// Strict Equal: no type cohersion
const isStrictEqual = (a, b) => Object.is(a, b); // Maneja bien NaN y -0/+0

// Loose Equal: allows type cohersion
const isLooseEqual = (a, b) => a == b;

// Is Primitive? (string, number, boolean, null, undefined, symbol, bigint)
const isPrimitive = (v) => v === null || (typeof v !== 'object' && typeof v !== 'function');


console.log('--- Strict Equal (Object.is) ---');
console.log('Object.is(0, -0):', isStrictEqual(0, -0));      // false
console.log('Object.is(NaN, NaN):', isStrictEqual(NaN, NaN)); // true
console.log('Object.is(2, "2"):', isStrictEqual(2, "2"));     // false

console.log('--- Loose Equal (==) ---');
console.log('2 == "2":', isLooseEqual(2, "2"));               // true (coerción)
console.log('0 == false:', isLooseEqual(0, false));           // true (cuidado)

console.log('--- Primitives ---');
console.log('isPrimitive(null):', isPrimitive(null));         // true
console.log('isPrimitive({}):', isPrimitive({}));             // false
console.log('isPrimitive(Symbol()):', isPrimitive(Symbol())); // true