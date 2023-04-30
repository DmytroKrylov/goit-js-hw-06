const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener("input", () => {
  const fontSize = input.value + "px";
  span.style.fontSize = fontSize;
});
