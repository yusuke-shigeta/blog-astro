// *
// mainの上部の余白を調整
// headerの高さは可変するため
// *
export function adjustMainMargin(header, main) {
  if (header) {
    const headerHeight = header.offsetHeight;
    main.style.marginTop = `${headerHeight}px`;
  }
}
