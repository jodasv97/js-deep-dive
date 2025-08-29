function expect(name, actual, expected) {
  const ok = Object.is(actual, expected);
  console.log(ok ? `✅ ${name}` : `❌ ${name} -> got ${actual}, expected ${expected}`);
}

// Replace these with your imported/defined functions:
const isStrictEqual = (a,b) => Object.is(a,b);
// eslint-disable-next-line eqeqeq
const isLooseEqual = (a,b) => a == b;
const isPrimitive = v => v === null || (typeof v !== 'object' && typeof v !== 'function');

// Tests
expect('Strict: NaN ~ NaN', isStrictEqual(NaN, NaN), true);
expect('Strict: 0 ~ -0',    isStrictEqual(0, -0),   false);
expect('Strict: 2 ~ "2"',   isStrictEqual(2, "2"),  false);

expect('Loose: 2 == "2"',   isLooseEqual(2, "2"),   true);
expect('Loose: 0 == false', isLooseEqual(0, false), true);

expect('Prim: null',        isPrimitive(null),      true);
expect('Prim: {}',          isPrimitive({}),        false);
expect('Prim: Symbol()',    isPrimitive(Symbol()),  true);
