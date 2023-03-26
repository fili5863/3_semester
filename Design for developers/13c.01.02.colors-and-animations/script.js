import { animate, scroll } from "https://cdn.skypack.dev/motion";

animate("body", { opacity: [0, 1] }, { duration: 2 });

scroll(animate(".progress", { scaleX: [0, 1] }));

let darkModeState = false;

const button = document.querySelector("#darkMode");

function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
}

toggleDarkMode(localStorage.getItem("dark-mode") == "true");

button.addEventListener("click", () => {
  darkModeState = !darkModeState;

  toggleDarkMode(darkModeState);
});
