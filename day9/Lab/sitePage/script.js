//! Time

let buttonDivTime = document.createElement("div");
document.body.appendChild(buttonDivTime);

let buttonTime = document.createElement("button");
buttonDivTime.appendChild(buttonTime);

buttonTime.textContent = "Time Now";

buttonTime.addEventListener("click", () => {
  let showDate = document.createElement("p");
  buttonDivTime.appendChild(showDate);
  showDate.textContent = `This Is Time Now:  ${new Date().toLocaleString()}`;
});

//! Popup

let buttonDivPopup = document.createElement("div");
document.body.appendChild(buttonDivPopup);

let buttonPopup = document.createElement("button");
buttonPopup.textContent = "Open Popup";
buttonDivPopup.appendChild(buttonPopup);

let popupWindow;
buttonPopup.addEventListener("click", () => {
  setTimeout(() => {
    popupWindow = window.open(
      "https://elzero.org/javascript-bootcamp-assignments-lesson-from-169-to-178/",
      "_blank",
      "width=400, height=400, top=150, left=150"
    );
  }, 3000);

  setTimeout(() => {
    let buttonClose = document.createElement("button");
    buttonClose.textContent = "Close Popup";
    buttonDivPopup.appendChild(buttonClose);
    buttonClose.addEventListener("click", () => {
      if (popupWindow && !popupWindow.closed) {
        popupWindow.close();
      }
    });
  }, 3000);
});

//! Numbers

let divNumbers = document.createElement("div");
document.body.appendChild(divNumbers);
let buttonAddNumbers = document.createElement("button");
divNumbers.appendChild(buttonAddNumbers);
buttonAddNumbers.innerHTML = "Numbers Even ";

const evenNumberRegex = /^\d*[02468]$/;

buttonAddNumbers.addEventListener("click", () => {
  let inputNumbers = prompt(
    "Please Enter Your Number For Check if Even Or Not"
  );
  if (evenNumberRegex.test(parseInt(inputNumbers))) {
    let numbers = document.createElement("p");
    numbers.innerHTML = `${parseInt(inputNumbers)} => True`;
    divNumbers.appendChild(numbers);
  } else {
    let numbers = document.createElement("p");
    numbers.innerHTML = `${parseInt(inputNumbers)} => False`;
    divNumbers.appendChild(numbers);
  }
});

//! Form

let divForm = document.createElement("div");
document.body.appendChild(divForm);

// Create inputs and submit button
let inName = document.createElement("input");
let inPhone = document.createElement("input");
let inMobile = document.createElement("input");
let inEmail = document.createElement("input");
let submitBtn = document.createElement("button");
submitBtn.textContent = "Add User";

inName.type = "text";
inPhone.type = "text";
inMobile.type = "text";
inEmail.type = "email";

inName.placeholder = "Write Your Name";
inPhone.placeholder = "Write Your Phone Number (8 digits)";
inMobile.placeholder =
  "Write Your Mobile Number (11 digits, start 010/011/012)";
inEmail.placeholder = "Write Your Email";

divForm.append(inName, inPhone, inMobile, inEmail, submitBtn);

// Create the table to display users

let userTable = document.createElement("table");
userTable.border = "1";
userTable.style.marginTop = "20px";
userTable.style.borderCollapse = "collapse";
userTable.style.display = "none";
document.body.appendChild(userTable);

// Create table header
let thead = document.createElement("thead");
userTable.appendChild(thead);

let headerRow = document.createElement("tr");
thead.appendChild(headerRow);

["Name", "Phone", "Mobile", "Email"].forEach((text) => {
  let th = document.createElement("th");
  th.textContent = text;
  th.style.padding = "8px";
  headerRow.appendChild(th);
});

// Create tbody for rows
let tbody = document.createElement("tbody");
userTable.appendChild(tbody);

// Validation regex
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

// Input restrictions
inName.addEventListener("input", () => {
  inName.value = inName.value.replace(/\d/g, "");
});

inPhone.addEventListener("input", () => {
  inPhone.value = inPhone.value.replace(/\D/g, "");
  if (inPhone.value.length > 8) inPhone.value = inPhone.value.slice(0, 8);
});

inMobile.addEventListener("input", () => {
  inMobile.value = inMobile.value.replace(/\D/g, "");
  if (inMobile.value.length > 11) inMobile.value = inMobile.value.slice(0, 11);
});

// Load users from localStorage or empty array
let users = JSON.parse(localStorage.getItem("users") || "[]");

// Function to add a user row to the table
function addRow(user) {
  let tr = document.createElement("tr");

  Object.values(user).forEach((value) => {
    let td = document.createElement("td");
    td.textContent = value;
    td.style.padding = "8px";
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
}

// Add existing users on page load
users.forEach(addRow);

let btnShowTable = document.createElement("button");
btnShowTable.textContent = "Show Users";
document.body.appendChild(btnShowTable);

let btnHideTable = document.createElement("button");
btnHideTable.textContent = "Hide Users";
document.body.appendChild(btnHideTable);

let btnClearUsers = document.createElement("button");
btnClearUsers.textContent = "Clear Users";
document.body.appendChild(btnClearUsers);

// Initially hide the table
userTable.style.display = "none";

// Button event listeners
btnShowTable.addEventListener("click", () => {
  userTable.style.display = "table";
});

btnHideTable.addEventListener("click", () => {
  userTable.style.display = "none";
});

btnClearUsers.addEventListener("click", () => {
  tbody.innerHTML = "";
  users = [];
  localStorage.setItem("users", JSON.stringify(users));
});

// On submit button click
submitBtn.addEventListener("click", () => {
  if (!inName.value.trim()) {
    alert("Please enter your name without numbers.");
    return;
  }

  if (!/^\d{8}$/.test(inPhone.value)) {
    alert("Phone number must be exactly 8 digits.");
    return;
  }

  if (!/^(010|011|012)\d{8}$/.test(inMobile.value)) {
    alert("Mobile number must be 11 digits and start with 010, 011, or 012.");
    return;
  }

  if (!emailRegex.test(inEmail.value)) {
    alert("Please enter a valid email.");
    return;
  }

  let user = {
    name: inName.value.trim(),
    phone: inPhone.value,
    mobile: inMobile.value,
    email: inEmail.value.trim(),
  };

  addRow(user);

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  // Clear inputs
  inName.value = "";
  inPhone.value = "";
  inMobile.value = "";
  inEmail.value = "";
});
