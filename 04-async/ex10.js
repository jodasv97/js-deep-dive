/**
 * Ex10 — delay(ms)
 * TODOs:
 * - Implement delay(ms) → Promise that resolves after ms
 */

function delay(ms) {
  // TODO
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  // TODO: test with await delay(1000)
  console.log('Start');
  await delay(2000);
  console.log('Two seconds passed');
})();
