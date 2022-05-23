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
const formSpans = document.getElementsByClassName("form__span");
for (let i = 0; i < formInputs.length; i++) {
  document.getElementById("completeBtn").addEventListener("click",()=>{
    formInputs[i].classList.add("inputValidation");
    if(i<5){
      formSpans[i].classList.add("spanValidation");
    }
    document.getElementById("completeBtn").disabled = !form.checkValidity();
    function passvalue(){
      const street = document.getElementById("street").value
      const house =document.getElementById("house").value
      const flat =document.getElementById("flat").value
      localStorage.setItem("textvalue",street)
      return false
    }
    passvalue()
  });
}