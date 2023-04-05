"use strict";
console.log("script start");
const personName = "Aravind";
const bornYear = 1998;

const showPerson = () => {
  const age = getYear() - bornYear;
  const person = { name: personName, age };
  console.log("person", person);
};

function getYear() {
  return 2023;
}
const btn = document.getElementById("button");
btn.addEventListener("click", function () {
  console.log("button clicked");
});
showPerson();
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
console.log("script end");
