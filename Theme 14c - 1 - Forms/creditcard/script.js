const inputs = document.querySelectorAll("input");

inputs.forEach(inp =>
  inp.addEventListener("input", () => {
    if (inp.checkValidity() === true) {
      inp.blur();
      inp.parentElement.nextElementSibling.querySelector("input").focus();
    }
  })
);
