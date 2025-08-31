/**
 * Ex6 — once reuse
 * TODOs:
 * - Reuse once(fn) with multiple different functions and verify behavior
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

const greeting = once(() => console.log('Hi, this is me running for the first time'));
greeting();
greeting();
const randomNumber = once(() => console.log(Math.random()));
randomNumber();
randomNumber();