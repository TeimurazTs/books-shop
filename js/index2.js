const date = new Date();
let day = date.getDate();
if (day < 10) {
  day = "0" + day;
}
let month = date.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
const year = date.getFullYear();
const minDate = `${year}-${month}-${day}`;
document.getElementById("delivery").setAttribute("min", minDate);

let checks = document.querySelectorAll(".maxTwoCheck");
let maximumChecks = 2;
for (let i = 0; i < checks.length; i++) checks[i].onclick = allCheckevents;
function allCheckevents(event) {
  let checkedChecks = document.querySelectorAll(".maxTwoCheck:checked");
  if (checkedChecks.length >= maximumChecks + 1) return false;
}

const form = document.getElementById("form");

const formInputs = document.getElementsByClassName("allInputs");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("change", () => {
    buttonUpdate();
  });
}

document.getElementById("completeBtn").addEventListener("click", () => {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].classList.add("inputValidation");
  }
  function passvalue() {
    const street = document.getElementById("street").value;
    localStorage.setItem("textvalue", street);
    return false;
  }
  passvalue();
});

function buttonUpdate() {
  document.getElementById("completeBtn").disabled = !form.checkValidity();
}
