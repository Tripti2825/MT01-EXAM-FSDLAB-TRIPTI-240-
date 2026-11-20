function racePromises(items) {
  return new Promise((resolve, reject) => {
    for (const item of items) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
}

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise A"), 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise B"), 1000);
});

racePromises([p1, p2])
  .then((winner) => console.log("Winner:", winner))
  .catch((err) => console.log("Failed:", err));