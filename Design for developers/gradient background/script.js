"use strict";

import { animate, inView } from "https://cdn.skypack.dev/motion";

let scrollAni = animate("#bozo", {
  transform: "translateX(calc(100vw - 26rem))",
  duration: 2,
});

scrollAni.stop();
inView(".img", () => {
  scrollAni.play();
  console.log("in view");
  return () => {
    scrollAni.cancel();
    console.log("out of view");
  };
});
