import { c as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_B4_qSRoV.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/TagList_CPAiSsXQ.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_ZJkLO2_Y.mjs';
import { $ as $$BlogList } from '../chunks/BlogList_BCNzLj44.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogCollections = await getCollection("blog");
  const pageTitle = "Blog";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogList", $$BlogList, { "blogs": blogCollections })} ` })}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/index.astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
