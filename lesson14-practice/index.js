// __ 1 __
const obj = {};

obj.setName = function (v) {
  this.name = v;
};

obj.getName = function () {
  return this.name;
};

obj.setName("John");
console.log(obj.getName());

// __ 2 __
const obj2 = {};

obj2.add = function (v) {
  this.sum += v;
};

obj2.setSum = function (v) {
  this.sum = v;
};

obj2.getSum = function () {
  return this.sum;
};

obj2.setSum(10);
obj2.add(20);
console.log(obj2.getSum()); // Should log 30, 10 + 20 = 30
obj2.setSum(100);
console.log(obj2.getSum()); // Should log 100,  the sum was set to 100
