// Targeting elements 
const incBtn = document.querySelector(".incBtn");
const decBtn = document.querySelector(".decBtn");
const resetBtn = document.querySelector(".resetBtn");

let display = document.getElementById("displayContainer");

// Event Handling 
incBtn.addEventListener("click", () => display.innerText++);
decBtn.addEventListener("click", () => {
  // just to implement if else
  if (display.innerText > 0) display.innerText--;
});
resetBtn.addEventListener("click", () => (display.innerText = 0));
