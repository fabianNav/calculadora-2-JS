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

//TODO MOD OSCURO

const colorDelSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');
const setTheme = (tema) => {
  document.documentElement.setAttribute('data-theme', tema);
  localStorage.setItem('theme', tema);
}
slider.addEventListener('click', () => {
  let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(switchToTheme);
});
setTheme(localStorage.getItem('theme') || colorDelSistema);
