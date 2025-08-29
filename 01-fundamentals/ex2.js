/**
 * Ex2 — Closure Counter
 * TODOs:
 * - Implement counter() that returns a function
 * - Each call increments and returns an internal counter
 */

function counter() {
  // TODO: use a closure to keep state
  let counter = 1;
  return function() {
    return counter++;
  };
};

const c = counter();
// TODO: test logs → c() → 1, c() → 2, c() → 3

// --- Test harness for counter() ---

function expect(name, actual, expected) {
  const ok = Object.is(actual, expected);
  console.log(ok ? `✅ ${name}` : `❌ ${name} → got ${actual}, expected ${expected}`);
}

const c1 = counter();
expect("c1() first call", c1(), 1);
expect("c1() second call", c1(), 2);
expect("c1() third call", c1(), 3);

const c2 = counter();
expect("c2() first call", c2(), 1);
expect("c1() fourth call", c1(), 4);
expect("c2() second call", c2(), 2);