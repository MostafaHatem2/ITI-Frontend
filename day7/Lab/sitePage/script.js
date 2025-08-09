alert("Welcome to my first site");

currency = prompt("Enter Egyptian pounds");
function exchange(currency) {
  return currency * 48.17;
}
alert("your dollar is " + exchange(currency) + "$");

button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "Click";

button.addEventListener("click", () => {
  for (let i = 1; i <= 20; i++) {
    i % 2 == 0 ? console.log("I’m even") : console.log(i);
  }
});

let firstName = prompt("Enter your first name");

let mobileNumber = prompt("Enter your Mobile number");
while (mobileNumber.length !== 11) {
  mobileNumber = prompt(
    "Invalid Mobile number, please enter your Mobile number"
  );
}

let birthYear = prompt("Enter your Birth year");
while (isNaN(birthYear) || birthYear < 1990) {
  birthYear = prompt("Invalid Birth year, please enter your Birth year");
}

let age = 2025 - birthYear;

let color = prompt("Please enter a color (red, green, or blue)");
while (color !== "red" && color !== "green" && color !== "blue") {
  color = prompt("Invalid color. Please enter red, green, or blue");
}

// Create table
let table = document.createElement("table");
document.body.appendChild(table);
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

// Header
let thead = document.createElement("thead");
table.appendChild(thead);

let tr = document.createElement("tr");
thead.appendChild(tr);
tr.style.color = "white";
tr.style.backgroundColor = "blue";

let th1 = document.createElement("th");
th1.innerHTML = "Parameter";
tr.appendChild(th1);

let th2 = document.createElement("th");
th2.innerHTML = "Value";
tr.appendChild(th2);

// Body
let tbody = document.createElement("tbody");
table.appendChild(tbody);

// Function to add a row
function addRow(label, value, bgColor) {
  let tr = document.createElement("tr");
  tr.style.backgroundColor = bgColor || "white";

  let td1 = document.createElement("td");
  td1.innerHTML = label;
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerHTML = value;
  tr.appendChild(td2);

  tbody.appendChild(tr);
}

addRow("First Name", firstName);
addRow("Mobile Number", mobileNumber);
addRow("Birth Year", birthYear);
addRow("Age", age);
addRow("Color", color);

div = document.createElement("div");
document.body.appendChild(div);
h1 = document.createElement("h1");
div.appendChild(h1);
h1.innerHTML = `Welcome dear ${firstName}`;
h1.style.color = `${color}`;

h2 = document.createElement("h1");
div.appendChild(h2);
h2.innerHTML = `Your age is ${age}`;
h2.style.color = `${color}`;

h3 = document.createElement("h1");
div.appendChild(h3);
h3.innerHTML = `Your Mobile is ${mobileNumber}`;
h3.style.color = `${color}`;

function equalFunc(a, b, c) {
  if (a === b && b === c) {
    return 3;
  } else if (a === b || a === c || b === c) {
    return 2;
  } else return 0;
}

console.log(equalFunc(1, 2, 3));

let sum = 0;

while (true) {
  let value = prompt("Enter a number (0 to stop):");

  let num = Number(value);

  if (isNaN(num)) {
    alert("Invalid input! Please enter a numeric value.");
    continue;
  }

  if (num === 0) {
    break;
  }

  sum += num;

  if (sum > 50) {
    break;
  }
}

alert("The total sum is: " + sum);

numbers = prompt("enter a message");

div2 = document.createElement("div");
document.body.appendChild(div2);

for (let i = 1; i < 7; i++) {
  let h = document.createElement(`h${i}`);
  div2.appendChild(h);
  h.innerHTML = numbers;
}
