var miles = Number(prompt("Enter the number of miles per year:"));

var cost = Number(prompt("Enter the cost of gallon"));

function annualCost(miles, cost, rating) {
  return (miles * cost) / rating;
}

document.write(
  "To drive a car with an MPG rating of 12 for " +
    miles +
    " at $" +
    cost +
    " per gallon would cost " +
    annualCost(miles, cost, 12)
);

document.write(
  "<br>To drive a car with an MPG rating of 17 for " +
    miles +
    " at $" +
    cost +
    " per gallon would cost " +
    annualCost(miles, cost, 17)
);

document.write(
  "<br>To drive a car with an MPG rating of 26 for " +
    miles +
    " at $" +
    cost +
    " per gallon would cost " +
    annualCost(miles, cost, 26)
);

document.write(
  "<br>To drive a car with an MPG rating of 29 for " +
    miles +
    " at $" +
    cost +
    " per gallon would cost " +
    annualCost(miles, cost, 29)
);