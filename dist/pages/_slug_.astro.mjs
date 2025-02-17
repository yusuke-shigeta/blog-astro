import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_CecKvSIS.mjs';
import 'kleur/colors';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths() {
  const posts = await Astro.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_DuDZEhos.mjs').then(n => n._),"./posts/post-2.md": () => import('../chunks/post-2_Xiga7DQC.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_Dy5e2h3Q.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_BFhFo5Fp.mjs').then(n => n._),"./posts/post-5.md": () => import('../chunks/post-5_B9Oskheu.mjs').then(n => n._)}), () => "./posts/**/*.md");
  return posts.map((post) => ({
    params: {
      slug: post.frontmatter.slug
    },
    props: {
      post
    }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { Content } = Astro2.props.post;
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/[slug].astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
