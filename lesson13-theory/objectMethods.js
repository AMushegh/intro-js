let car = {
  brand: "toyota",
  model: "camry",
  drive() {
    console.log("car is driving");
  },
  stop: function () {
    console.log("car stops");
  },
  info() {
    console.log(this.brand, this.model);
  },
};

car.info();
