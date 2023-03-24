window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("#right-eye").addEventListener("mouseover", onOver);

  document.querySelectorAll("g").forEach(g => {
    g.addEventListener("mouseover", onOver);
    g.addEventListener("mouseout", onOut);
  });

  function onOver(event) {
    console.log("over target", event.target);
    event.target.classList.add("over");
  }
}

function onOut(event) {
  event.target.classList.remove("over");
}
