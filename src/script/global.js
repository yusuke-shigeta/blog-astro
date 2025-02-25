const header = document.querySelector(".header");
const main = document.querySelector(".main");

import { adjustMainMargin } from "./components/adjustMainMargin";

adjustAnchorLinks();

document.addEventListener("DOMContentLoaded", () => {
  adjustMainMargin(header, main);
});

// *
// アンカーリンクの位置を調整
// *
function adjustAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const headerHeight = header ? header.offsetHeight : 0;
      const offsetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
}
