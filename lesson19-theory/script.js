const employees = [
  {
    firstName: "Arabela",
    lastName: "Fockes",
    email: "afockes0@wired.com",
    salary: "$6.18",
    isEngineer: true,
    gender: "Female",
  },
  {
    firstName: "Bryant",
    lastName: "Marchi",
    email: "bmarchi1@theatlantic.com",
    salary: "$8.05",
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Batholomew",
    lastName: "Eim",
    email: "beim2@goodreads.com",
    salary: "$7.26",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Ritchie",
    lastName: "Ferreira",
    email: "rferreira3@booking.com",
    salary: "$4.07",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Kaylyn",
    lastName: "Ivain",
    email: "kivain4@gmpg.org",
    salary: "$5.89",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Wilhelmina",
    lastName: "Portigall",
    email: "wportigall5@plala.or.jp",
    salary: "$2.06",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Rouvin",
    lastName: "Gillcrist",
    email: "rgillcrist6@aol.com",
    salary: "$7.29",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Flemming",
    lastName: "Scroggins",
    email: "fscroggins7@msu.edu",
    salary: "$7.54",
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Sallee",
    lastName: "Schlagh",
    email: "sschlagh8@reuters.com",
    salary: "$2.24",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Roxine",
    lastName: "Bedo",
    email: "rbedo9@whitehouse.gov",
    salary: "$6.47",
    isEngineer: false,
    gender: "Female",
  },
];

const rootElement = document.getElementById("root");

// container element
const containerElement = document.createElement("div");
containerElement.classList.add("container");

// list element
const listElement = document.createElement("ul");
listElement.classList.add("employee-list");

let restrictedEmails = [];

function cardItemClickHandler(email) {
  restrictedEmails.push(email);
  renderEmployees();
}

function renderEmployees() {
  listElement.innerHTML = "";
  employees
    .filter((employee) => !restrictedEmails.includes(employee.email))
    .forEach((employee) => {
      const liElement = document.createElement("li");
      const employeeCardElement = document.createElement("div");
      employeeCardElement.classList.add("employee-card");
      employeeCardElement.addEventListener("click", () =>
        cardItemClickHandler(employee.email)
      );

      if (employee.isEngineer) {
        employeeCardElement.classList.add("engineer");
      }

      const employeeCardNameElement = document.createElement("h3");
      employeeCardNameElement.innerText =
        employee.firstName + " " + employee.lastName;

      const employeeCardEmailElement = document.createElement("p");
      employeeCardEmailElement.innerText = employee.email;

      const employeeCardSalaryElement = document.createElement("p");
      employeeCardSalaryElement.innerText = employee.salary;

      employeeCardElement.append(
        employeeCardNameElement,
        employeeCardEmailElement,
        employeeCardSalaryElement
      );
      liElement.append(employeeCardElement);
      listElement.append(liElement);
    });
}

rootElement.appendChild(containerElement);
containerElement.appendChild(listElement);

renderEmployees();
