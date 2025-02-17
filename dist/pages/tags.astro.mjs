import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BDs0mMKt.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BYCUu8YV.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B3Bv8PE3.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const tagsSet = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => tagsSet.add(tag));
    }
  });
  const tags = Array.from(tagsSet);
  const pageTitle = "Tag";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul> ${tags.map((tag) => renderTemplate`<li${addAttribute(tag, "key")}>${tag}</li>`)} </ul> ` })}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/tags/index.astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
