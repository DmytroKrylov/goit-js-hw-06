const input = document.querySelector("#name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", onTargetButtonClick);

function onTargetButtonClick(event) {
  span.textContent = input.value || "Anonymous";
}
