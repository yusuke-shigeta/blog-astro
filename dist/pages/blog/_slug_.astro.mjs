import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as renderSlot, e as addAttribute } from '../../chunks/astro/server_BDs0mMKt.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BYCUu8YV.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B3Bv8PE3.mjs';
/* empty css                                     */
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { date, title, description, tags } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": title, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-5grsw2hi><em data-astro-cid-5grsw2hi>${description}</em></p> <p data-astro-cid-5grsw2hi>${date.toISOString().slice(0, 10)}</p> <div class="tags" data-astro-cid-5grsw2hi> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-5grsw2hi> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-5grsw2hi>${tag}</a> </p>`)} </div> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/MarkdownPostLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Toc = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-6t6zfk7k> <ul data-astro-cid-6t6zfk7k> ${updateHeadings.map((heading) => renderTemplate`<li${addAttribute(heading.class, "class")} data-astro-cid-6t6zfk7k> <a${addAttribute(`#${heading.slug}`, "href")} data-astro-cid-6t6zfk7k>${heading.text}</a> </li>`)} </ul> </nav> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/Toc.astro", void 0);

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
  console.log(blog);
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$MarkdownPostLayout, { "title": blog.data.title, "description": blog.data.description, "date": blog.data.date, "tags": blog.data.tags }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Toc", $$Toc, { "headings": headings })} ${renderComponent($$result2, "Content", Content, {})} ` })}`;
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
