function cleanupObject(obj) {
  for (const element of Object.keys(obj)) {
    delete obj[element];
  }
}

const car = {
  model: "camry",
  brand: "toyota",
  year: 2024,
  volume: 2.5,
};

cleanupObject(car);
console.log(car);
