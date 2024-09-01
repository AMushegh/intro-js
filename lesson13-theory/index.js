// how to create ab object  {}, new Object()
let user = {
  name: "mushegh",
  age: 24,
  surname: "andrasyan",
  "is-married": true,
  address: null,
  universities: ["aua", "rau"],
};

// how to get properties
let propName = "surname";

console.log(user.name);
console.log(user["is-married"]);
console.log(user[propName]);

// how to edit properties
user.name = "ashot";
console.log(user.name);
user.address = "Yerevan Ajapnyak";
console.log(user.address);

// how to add a property
user.profession = "engineer";
user["secondProfession"] = "mechanic";
console.log(user);

// how to delete a property
delete user;
console.log(user);
