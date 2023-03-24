"use strict";

import { timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".ball", { x: 400, rotate: 250 }, { duration: 2 }],
  [".ball", { scale: 0, x: 1920, y: -900 }],
];

timeline(sequence);
