const header = document.querySelector(".header");
const main = document.querySelector(".main");
const toc = document.querySelector(".toc");

document.addEventListener("DOMContentLoaded", () => {
  adjustHeaderMargin();
});

// *
// mainとtocの上部の余白を調整
// headerの高さは可変するため
// *
function adjustHeaderMargin() {
  if (header) {
    const headerHeight = header.offsetHeight;
    main.style.marginTop = `${headerHeight}px`;
    toc.style.top = `${headerHeight + 24}px`;
  }
}
