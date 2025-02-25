const header = document.querySelector(".header");
const main = document.querySelector(".main");

import { adjustMainMargin } from "./components/adjustMainMargin";

document.addEventListener("DOMContentLoaded", () => {
  adjustMainMargin(header, main);
});
