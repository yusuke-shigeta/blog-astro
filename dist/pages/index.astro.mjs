import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BDs0mMKt.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BmNXvDhY.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "TOP";
  const mainColor = "blue";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "mainColor": mainColor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>これがslot置いたところに出力される</h2> ` })}`;
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
