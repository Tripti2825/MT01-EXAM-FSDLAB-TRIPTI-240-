function runTask() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Task completed");
    } else {
      reject("Task failed");
    }
  });
}

async function runWithRetries(maxAttempts = 4) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const output = await runTask();
      console.log(output);
      return;
    } catch (e) {
      if (attempt === maxAttempts) {
        console.log("Error after 3 retries");
        return;
      }
      console.log("Retrying...");
    }
  }
}

runWithRetries();