import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, e as renderSlot, f as renderScript } from '../../chunks/astro/server_B4_qSRoV.mjs';
import 'kleur/colors';
import { $ as $$TagList, g as getCollection } from '../../chunks/TagList_CPAiSsXQ.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CWIltOrU.mjs';
import 'clsx';
/* empty css                                     */
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Toc = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Toc;
  const { headings } = Astro2.props;
  const filteredHeadings = headings.filter((heading) => heading.depth <= 4);
  const updateHeadings = filteredHeadings.map((heading) => {
    const className = heading.depth >= 2 ? `depth-${heading.depth}` : "";
    return {
      ...heading,
      class: className
    };
  });
  return renderTemplate`${maybeRenderHead()}<nav class="toc" data-astro-cid-6t6zfk7k> <ul data-astro-cid-6t6zfk7k> ${updateHeadings.map((heading) => renderTemplate`<li${addAttribute(heading.class, "class")} data-astro-cid-6t6zfk7k> <a class="toc-link"${addAttribute(`#${heading.slug}`, "href")} data-astro-cid-6t6zfk7k> ${heading.text} </a> </li>`)} </ul> </nav> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/Toc.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { blog, headings } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-4dqtj3le": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "pageTitle": blog.data.title, "data-astro-cid-4dqtj3le": true })} ${maybeRenderHead()}<main class="main" data-astro-cid-4dqtj3le> <div class="contents" data-astro-cid-4dqtj3le> <p class="date" data-astro-cid-4dqtj3le>投稿日: ${blog.data.date.toISOString().slice(0, 10)}</p> ${blog.data.update && renderTemplate`<p class="date" data-astro-cid-4dqtj3le>更新日: ${blog.data.update.toISOString().slice(0, 10)}</p>`} ${renderComponent($$result2, "TagList", $$TagList, { "tags": blog.data.tags, "data-astro-cid-4dqtj3le": true })} ${renderSlot($$result2, $$slots["default"])} </div> <div class="sidebar" data-astro-cid-4dqtj3le> ${renderComponent($$result2, "Toc", $$Toc, { "headings": headings, "data-astro-cid-4dqtj3le": true })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4dqtj3le": true })}  ${renderScript($$result2, "/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/BlogLayout.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/BlogLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const blogs = await getCollection("blog");
  return blogs.map((blog) => ({
    params: { slug: blog.slug },
    props: { blog }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { blog } = Astro2.props;
  const { Content, headings } = await blog.render();
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "blog": blog, "headings": headings }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
