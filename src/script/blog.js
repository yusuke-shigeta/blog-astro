const header = document.querySelector(".header");
const toc = document.querySelector(".tocs");
const uls = document.querySelectorAll("ul");
const ols = document.querySelectorAll("ol");

document.addEventListener("DOMContentLoaded", () => {
  adjustTocMargin();
  processUls();
  processOls();
});

// *
// 要素の深さを取得する
// *
function getDepth(element, selector) {
  let depth = 0;
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      depth++;
    }
    element = element.parentElement;
  }
  return depth;
}

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

// *
//
// *
function processUls() {
  uls.forEach((ul) => {
    if (!ul.closest("ol")) {
      const depth = getDepth(ul, "ul");
      ul.classList.add(`depth-${depth}`);
    }
  });
}

// *
//
// *
function processOls() {
  ols.forEach((ol) => {
    const depth = getDepth(ol, "ol");
    ol.classList.add(`depth-${depth}`);
  });
}
