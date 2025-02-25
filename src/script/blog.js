const header = document.querySelector(".header");
const toc = document.querySelector(".tocs");

document.addEventListener("DOMContentLoaded", () => {
  adjustTocMargin();
});

// *
// tocの上部の余白を調整
// headerの高さは可変するため
// *
function adjustTocMargin() {
  if (header) {
    const headerHeight = header.offsetHeight;
    toc.style.top = `${headerHeight + 24}px`;
  }
}
