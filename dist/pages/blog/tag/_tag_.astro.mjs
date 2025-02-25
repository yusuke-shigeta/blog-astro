import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent } from '../../../chunks/astro/server_B4_qSRoV.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/TagList_CPAiSsXQ.mjs';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_ZJkLO2_Y.mjs';
import { $ as $$BlogList } from '../../../chunks/BlogList_BCNzLj44.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const blogs = await getCollection("blog");
  const tagsSet = /* @__PURE__ */ new Set();
  blogs.forEach((blog) => {
    blog.data.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).map((tag) => ({
    params: { tag },
    props: { tag }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const blogs = await getCollection("blog");
  const filteredBlogs = blogs.filter((blog) => blog.data.tags.includes(tag));
  const pageTitle = tag;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogList", $$BlogList, { "blogList": filteredBlogs })} ` })}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/tag/[tag].astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/tag/[tag].astro";
const $$url = "/blog/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
