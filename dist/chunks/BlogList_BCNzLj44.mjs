import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_B4_qSRoV.mjs';
import 'kleur/colors';
import { $ as $$TagList } from './TagList_CPAiSsXQ.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$BlogList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogList;
  const { blogs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="blogs" data-astro-cid-35dpazjw> ${blogs.map((blog) => renderTemplate`<li class="blog" data-astro-cid-35dpazjw> <a class="blog-link"${addAttribute(`/blog/${blog.slug}`, "href")} data-astro-cid-35dpazjw> ${blog.data.title} </a> ${blog.data.update ? renderTemplate`<p class="blog-update" data-astro-cid-35dpazjw>更新日: ${blog.data.update.toISOString().slice(0, 10)}</p>` : renderTemplate`<p class="blog-date" data-astro-cid-35dpazjw>投稿日: ${blog.data.date.toISOString().slice(0, 10)}</p>`} <p class="blog-title" data-astro-cid-35dpazjw>${blog.data.title}</p> ${renderComponent($$result, "TagList", $$TagList, { "tags": blog.data.tags, "data-astro-cid-35dpazjw": true })} </li>`)} </ul> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/BlogList.astro", void 0);

export { $$BlogList as $ };
