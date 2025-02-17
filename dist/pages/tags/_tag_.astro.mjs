import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../../chunks/astro/server_CecKvSIS.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_LPo9KOwk.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(url, "href")}>${title}</a> </li>`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../../chunks/post-1_DuDZEhos.mjs').then(n => n._),"../posts/post-2.md": () => import('../../chunks/post-2_Xiga7DQC.mjs').then(n => n._),"../posts/post-3.md": () => import('../../chunks/post-3_Dy5e2h3Q.mjs').then(n => n._),"../posts/post-4.md": () => import('../../chunks/post-4_BFhFo5Fp.mjs').then(n => n._),"../posts/post-5.md": () => import('../../chunks/post-5_B9Oskheu.mjs').then(n => n._)}), () => "../posts/*.md");
  const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${tag}のタグが付いた記事</p> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/tags/[tag].astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
