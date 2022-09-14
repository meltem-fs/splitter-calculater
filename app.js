let bill = document.querySelector(".inputs-section__bill-input");
let billNumber = parseInt(bill.value);

let people = document.querySelector(".inputs-selection__people-input");
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector(".results__tip-value");

let totalResult = document.querySelector(".results_total-value");

let butons = document.querySelectorAll(".btns__button");

let alert = document.querySelector("#alert");

let tipValue = 5;

console.log(butons);

calculateTip();

butons.forEach((element) => {
  element.addEventListener("click", (event) => {
    removeActive();
    element.classList.add("btns__button--selected");

    tipValue = parseInt(event.target.innerText.slice(0, -1));

    calculateTip();
  });
});

function removeActive() {
  butons.forEach((element) => {
    element.classList.remove("btns__button--selected");
  });
}

bill.addEventListener("input", () => {
  billNumber = parseFloat(bill.value);
  if (billNumber == 0 || isNaN(billNumber)) {
    tipResult.innerText = 0;
    totalResult.innerText = 0;
  } else {
    calculateTip();
  }
});

let custom = document.querySelector(".btns__custom");
custom.addEventListener("click", () => {
  removeActive();
});

custom.addEventListener("input", () => {
  tipValue = parseInt(custom.value);
  if (isNaN(tipValue)) {
  } else {
    calculateTip();
  }
});

people.addEventListener("input", () => {
  peopleNumber = parseFloat(people.value);
  if (people.value == 0 || isNaN(peopleNumber)) {
    people.getElementsByClassName.borderColor = "rgb(192,36,36)";
    alert.classList.add("error");
    tipResult.innerText = 0;
    totalResult.innerText = 0;
  } else {
    alert.classList.remove("error");
    people.getElementsByClassName.borderColor = "hsl(189, 41%, 97%)";
    calculateTip();
  }
});

let reset = document.querySelector(".result-section__reset");
reset.addEventListener("click", () => {
  bill.value = 0;
  billNumber = 0;
  people.value = 5;
  peopleNumber = 5;
  custom.value = "Custom";
  calculateTip();
});

function calculateTip() {
  tipResult.innerText = ((billNumber * tipValue) / 100 / peopleNumber).toFixed(
    2
  );

  totalResult.innerText = (
    ((billNumber * tipValue) / 100 + billNumber) /
    peopleNumber
  ).toFixed(2);
}
