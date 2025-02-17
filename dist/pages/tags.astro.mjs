import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CecKvSIS.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_LPo9KOwk.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../chunks/post-1_DuDZEhos.mjs').then(n => n._),"../posts/post-2.md": () => import('../chunks/post-2_Xiga7DQC.mjs').then(n => n._),"../posts/post-3.md": () => import('../chunks/post-3_Dy5e2h3Q.mjs').then(n => n._),"../posts/post-4.md": () => import('../chunks/post-4_BFhFo5Fp.mjs').then(n => n._),"../posts/post-5.md": () => import('../chunks/post-5_B9Oskheu.mjs').then(n => n._)}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a> </p>`)} </div> ` })} `;
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
