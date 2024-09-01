let transactions = [
  {
    value: 129,
    date: "12.09.2024",
    type: "card",
  },
  {
    value: 256,
    date: "23.05.2024",
    type: "cash",
  },
  {
    value: 320,
    date: "10.07.2024",
    type: "card",
  },
  {
    value: 75,
    date: "03.08.2024",
    type: "online",
  },
  {
    value: 415,
    date: "22.04.2024",
    type: "cash",
  },
  {
    value: 182,
    date: "15.06.2024",
    type: "card",
  },
  {
    value: 529,
    date: "28.03.2024",
    type: "online",
  },
  {
    value: 63,
    date: "05.12.2024",
    type: "card",
  },
  {
    value: 299,
    date: "18.11.2024",
    type: "cash",
  },
  {
    value: 450,
    date: "29.01.2024",
    type: "online",
  },
  {
    value: 213,
    date: "17.02.2024",
    type: "card",
  },
];

function findMaxTransactionDate() {
  let maxTransaction = transactions[0];

  for (const element of transactions) {
    if (element.value > maxTransaction.value) {
      maxTransaction = element;
    }
  }
  return maxTransaction.date;
}

console.log(findMaxTransactionDate());
