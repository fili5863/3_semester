import { animate, scroll, inView } from "https://cdn.skypack.dev/motion";

const swooshIn = animate("#proj1", { x: ["-100vw", 0], opacity: [0, 1] }, { duration: 0.7 });
const swooshIn2 = animate(
  "#proj2",
  { x: ["100vw", 0], opacity: [0, 1] },
  { delay: 0.5, duration: 0.7 }
);
swooshIn.stop();
swooshIn2.stop();
scroll(animate(".progress", { scaleX: [0, 1] }));
animate(".header_text", { x: ["-100vw", 0] }, { duration: 0.8 });
animate(".header_graphics", { y: ["100vw", 0], rotate: 20, opacity: [0, 1] }, { duration: 1 });
inView("main h2", info => {
  swooshIn.play();
  swooshIn2.play();
});
