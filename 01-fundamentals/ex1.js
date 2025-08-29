/**
 * Ex1 — Strict vs Loose Equality & Primitive Detection
 * TODOs:
 * - Implement isStrictEqual(a, b) → use Object.is
 * - Implement isLooseEqual(a, b) → use ==
 * - Implement isPrimitive(v) → true for string, number, boolean, null, undefined, symbol, bigint
 * - Log examples: NaN, -0/+0, 2 vs "2"
 */

function isStrictEqual(a, b) {
  // TODO: implement with Object.is
  return Object.is(a, b);
};

function isLooseEqual(a, b) {
  // TODO: implement with ==
  return a == b;
};

function isPrimitive(v) {
  // TODO: implement primitive detection
//   const primitiveCheck = (v === null || v === undefined) ? true : (typeof(v) === 'object' || typeof(v) === 'function' ? false : true);
  return v === null || (typeof v !== 'function' && typeof v !== 'object');
};
// TODO: test logs


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