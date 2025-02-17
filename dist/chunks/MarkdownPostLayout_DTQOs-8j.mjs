import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead, y as renderSlot, d as addAttribute } from './astro/server_CecKvSIS.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_LPo9KOwk.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { date, title, description, tags } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": title, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-5grsw2hi><em data-astro-cid-5grsw2hi>${description}</em></p> <p data-astro-cid-5grsw2hi>${date}</p> <div class="tags" data-astro-cid-5grsw2hi> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-5grsw2hi> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-5grsw2hi>${tag}</a> </p>`)} </div> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
