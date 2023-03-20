"use strict";

import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(
  ".ball",
  { y: -400 },
  {
    delay: stagger(0.2),
    duration: 1,
    easing: "ease-in-out",
    repeat: Infinity,
    direction: "alternate",
  }
);
