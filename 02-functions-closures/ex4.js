/**
 * Ex4 — once(fn)
 * TODOs:
 * - Implement once(fn)
 * - Returned function runs fn only the first time and returns same result subsequently
 */

function once(fn) {
  // TODO
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    };
    return result;
  };
};

// TODO: test with Math.random or a counter

const init = once(() => console.log("Initialized!"));

init(); // "Initialized!"
init(); // nothing
init(); // nothing
