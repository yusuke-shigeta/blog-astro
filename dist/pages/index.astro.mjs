import { c as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_B4_qSRoV.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_ZJkLO2_Y.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "TOP";
  const mainColor = "blue";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle, "mainColor": mainColor })}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/index.astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
