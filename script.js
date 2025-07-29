// script.js

const display = document.querySelector(".display");
const toggleSwitch = document.querySelector("#themeToggle");
const themeLabel = document.querySelector(".theme-label");

function appendValue(val) {
  if (display.textContent === "0") {
    display.textContent = val;
  } else {
    display.textContent += val;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  if (display.textContent.length === 1 || display.textContent === "Error") {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent.replace(/×/g, "*").replace(/÷/g, "/"));
  } catch (error) {
    display.textContent = "Error";
  }
}

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  themeLabel.textContent = document.body.classList.contains("dark")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});
