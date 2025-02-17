import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CecKvSIS.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_LPo9KOwk.mjs';
import { g as getCollection } from '../chunks/_astro_content_Dg7IxTW4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogCollections = await getCollection("blog");
  const pageTitle = "Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul> ${blogCollections.map((blogCollection) => renderTemplate`<li> <a${addAttribute(`/blog/${blogCollection.slug}`, "href")}>  <p>${blogCollection.data.title}</p> </a> </li>`)} </ul> ` })}`;
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
