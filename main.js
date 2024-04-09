import './css/style.css'

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "=") {
      display.value = eval(display.value);
    } else if (btn.id === "resetear") {
      display.value = "";
    } else if (btn.id == "borrar") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.id;
    }
  })
} )
