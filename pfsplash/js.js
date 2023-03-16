const con = document.querySelector(".top");

console.log(con.offsetHeight);

window.addEventListener(
  "scroll",
  () => {
    let h = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    if (h <= 1) {
      document.body.style.setProperty("--scroll", h);
    } else {
      document.body.style.setProperty("--scroll", Math.round(h));
    }
  },
  false
);
