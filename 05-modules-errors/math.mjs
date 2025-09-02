/**
 * Ex13 — Math module (ESM)
 * TODOs:
 * - Export sum, sub, mul, div
 * - div should throw Error on division by zero
 */

export function sum(a, b) {
  // TODO
  return a + b;
}

export function sub(a, b) {
  // TODO
  return a - b;
}

export function mul(a, b) {
  // TODO
  return a * b;
}

export function div(a, b) {
  // TODO
  if(b !== 0) {
    return a / b;
  } else {
    return new Error('Division by zero not allowed');
  }
}




