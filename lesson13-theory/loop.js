let user = {
  name: "mushegh",
  age: 24,
  surname: "andrasyan",
  "is-married": true,
  address: null,
  universities: ["aua", "rau"],
};

for (const key in user) {
  console.log(key);
}

console.log("-".repeat(10));

let a = [];
console.log(user.fullName);
console.log(a[0]);
