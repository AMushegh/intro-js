let testObject = {
  testKey: "testValue",
  orinak: 23890,
};

delete testObject.orinak;

console.log(testObject.gagik);
console.log(testObject.hasOwnProperty("gagik"));
