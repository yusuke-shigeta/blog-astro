import { c as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_B4_qSRoV.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$TagList } from '../../chunks/TagList_CPAiSsXQ.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_ZJkLO2_Y.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogs = await getCollection("blog");
  const tagsSet = /* @__PURE__ */ new Set();
  blogs.forEach((blog) => {
    if (blog.data.tags) {
      blog.data.tags.forEach((tag) => tagsSet.add(tag));
    }
  });
  const tags = Array.from(tagsSet);
  const pageTitle = "Tag";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TagList", $$TagList, { "tags": tags })} ` })}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/tag/index.astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/tag/index.astro";
const $$url = "/blog/tag";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
