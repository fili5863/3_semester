"use strict";

import { animate } from "https://cdn.skypack.dev/motion";

animate(".ball", { x: 400, rotate: 200 }, { duration: 2 });

animate(".ball", { scale: 0 }, { delay: 2 });
