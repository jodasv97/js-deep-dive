/**
 * Ex11 — Promise.all vs allSettled
 * TODOs:
 * - Simulate 3 promises with different times and outcomes
 */

function fakeApi(name, time, shouldFail = false) {
  // TODO: return new Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`${name} failed`);
      } else {
        resolve(`${name} success`);
      }
    }, time);
  });
}
// TODO: run Promise.all and Promise.allSettled and compare results
const promise1 = fakeApi("A", 1000, false); // resolves after 1s → "A success"
const promise2 = fakeApi("B", 2000, true); // rejects after 2s → "B failed"
const promise3 = fakeApi("C", 500, false); // resolves after 0.5s by default

Promise.all([promise1, promise2, promise3])
.then((values) => {
  console.log(values);
})
.catch(err => {
  console.log(`ALL error:`, err);
});

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
