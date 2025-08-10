let countNumber = prompt("Enter Any Characters:");

let count = 0;
for (let i = 0; i < countNumber.length; i++) {
  count++;
}

alert(`count the number of ${countNumber} in it is ${count}`);

countDiv = document.createElement("div");
countDiv.className = "countDiv";
countDiv.innerHTML = `count the number of ${countNumber} in it is ${count}`;
document.body.appendChild(countDiv);

countDiv.style.cssText =
  "background-color: #eee; margin-top: 20px; padding: 20px; font-size: 20px; width: 100%;";
let characters = confirm(
  "whether to consider case sensitivity of the entered string ornot via confirm"
);

let str = prompt("Enter Any Characters To Check if This is Palindrome Or Not:");

let result;

if (characters == true) {
  str = str.toLocaleLowerCase();
  let reversed = str.split("").reverse().join("").toLocaleLowerCase();
  reversed === str
    ? (result = `This is Palindrome ${str} = ${reversed}`)
    : (result = `This is not Palindrome ${str} != ${reversed}`);
} else {
  let reversed = str.split("").reverse().join("");
  reversed === str
    ? (result = `This is Palindrome ${str} = ${reversed}`)
    : (result = `This is not Palindrome ${str} != ${reversed}`);
}

alert(result);

countDiv2 = document.createElement("div");
countDiv2.className = "countDiv2";
countDiv2.innerHTML = result;
document.body.appendChild(countDiv2);

countDiv2.style.cssText =
  "background-color: #eee; margin-top: 20px; padding: 20px; font-size: 20px; width: 100%;";
let fill = prompt("Fill of 3 elements").split(" ");

let sum = 0;
let mult = 1;
let dive;
for (let i = 0; i < fill.length; i++) {
  let num = Number(fill[i]);
  sum += num;
  mult *= num;
  if (i === 0) {
    dive = num;
  } else {
    dive /= num;
  }
}

alert(`sum is ${sum} and mult is ${mult} and dive is ${dive}`);

countDiv3 = document.createElement("div");
countDiv3.className = "countDiv3";
document.body.appendChild(countDiv3);
elemmentSum = document.createElement("div");
elemmentSum.innerHTML = `Sum Of the 3 Value = ${sum}`;
elemmentMult = document.createElement("div");
elemmentMult.innerHTML = `Mult Of the 3 Value = ${mult}`;
elemmentDive = document.createElement("div");
elemmentDive.innerHTML = `Dive Of the 3 Value = ${dive}`;
countDiv3.appendChild(elemmentSum);
countDiv3.appendChild(elemmentMult);
countDiv3.appendChild(elemmentDive);

countDiv3.style.cssText =
  "background-color: #eee; margin-top: 20px; padding: 20px; font-size: 20px; width: 100%;";
let input = prompt("Enter 5 numbers separated by spaces:");
let arr = input.split(" ").map(Number);

let asc = arr.slice().sort((a, b) => a - b);
let desc = asc.slice().reverse();
alert(`Ascending: ${asc.join(", ")}\nDescending: ${desc.join(", ")}`);
let resultDiv = document.createElement("div");
resultDiv.className = "resultDiv";
resultDiv.style.cssText =
  "background-color: #eee; margin-top: 20px; padding: 20px; font-size: 20px; width: 100%;";

resultDiv.innerHTML = `
  <p>Ascending Order: ${asc.join(", ")}</p>
  <p>Descending Order: ${desc.join(", ")}</p>
`;
document.body.appendChild(resultDiv);

let radius = prompt("Enter the value of the circle’s radius:");
radius = Number(radius);

let result1;

if (isNaN(radius) || radius <= 0) {
  result1 = "Please enter a valid positive number for the radius.";
} else {
  let area = Math.PI * radius * radius;
  result1 = `The area of the circle with radius ${radius} is ${area.toFixed(
    2
  )}`;
}

alert(result1);

let resultDiv1 = document.createElement("div");
resultDiv1.className = "resultDiv";
resultDiv1.innerHTML = result1;
document.body.appendChild(resultDiv1);

resultDiv1.style.cssText =
  "background-color: #eee; margin-top: 20px; padding: 20px; font-size: 20px; width: 100%;";

let number = prompt("Enter a number to calculate its square root:");
number = Number(number);

let result2;

if (isNaN(number) || number < 0) {
  result2 = "Please enter a valid non-negative number.";
} else {
  let sqrt = Math.sqrt(number);
  result2 = `The square root of ${number} is ${sqrt.toFixed(2)}`;
}

alert(result2);

let sqrtDiv = document.createElement("div");
sqrtDiv.className = "sqrtDiv";
sqrtDiv.innerHTML = result2;
document.body.appendChild(sqrtDiv);

sqrtDiv.style.cssText =
  "background-color: #eee; margin-top: 20px; padding: 20px; font-size: 20px; width: 100%;";

let angle = prompt("Enter an angle in degrees to calculate its cosine value:");
angle = Number(angle);

let result3;

if (isNaN(angle)) {
  result3 = "Please enter a valid number for the angle.";
} else {
  let radians = (angle * Math.PI) / 180;
  let cosValue = Math.cos(radians);
  result3 = `The cosine of ${angle}° is ${cosValue.toFixed(4)}`;
}

alert(result3);

let cosDiv = document.createElement("div");
cosDiv.className = "cosDiv";
cosDiv.innerHTML = result3;
document.body.appendChild(cosDiv);

cosDiv.style.cssText =
  "background-color: #eee; margin-top: 20px; padding: 20px; font-size: 20px; width: 100%;";
