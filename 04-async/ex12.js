/**
 * Ex12 — retry(fn, retries)
 * TODOs:
 * - Implement retry for an async function
 * - Retry until success or attempts exhausted (optional: backoff)
 */

function delay(ms) {
  // TODO
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  // TODO: test with await delay(1000)
  console.log("Start");
  await delay(2000);
  console.log("Two seconds passed");
})();

async function retry(fn, retries) {
  // TODO
  let attempt = 0;
  while (attempt < retries) {
    try {
      const result = await fn();
      return result;
    } catch (error) {
      attempt++;
      if (attempt === retries) {
        throw error;
      }

      console.log(`Attempt ${attempt} failed. Retrying in 2s...`)
      await delay(2000);
    }
  }
}

// TODO: test with a function that fails first 1–2 times
