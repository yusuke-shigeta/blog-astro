import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B4_qSRoV.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_ZJkLO2_Y.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const identity = {
    firstName: "Yusuke",
    country: "Japan",
    occupation: "Web\u6280\u8853\u8005",
    hobbies: ["\u30B4\u30EB\u30D5", "\u30B5\u30A6\u30CA", "\u30E9\u30FC\u30E1\u30F3"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "PHP", "Astro", "figma"];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>head2</h2> <h2>head3</h2> <h2>head4</h2> <p>テキストテキストテキストテキストテキスト</p> <p>テキストテキストテキストテキストテキスト</p> <ul> <li>名前: ${identity.firstName}</li> <li>国: ${identity.country}</li> <li>職業: ${identity.occupation}</li> ${identity.hobbies.length >= 2 && renderTemplate`<li>
趣味: ${identity.hobbies[0]}, ${identity.hobbies[1]} </li>`} <li>
スキル:
<ul> ${skills.map((skill) => renderTemplate`<li class="skill">${skill}</li>`)} </ul> </li> </ul> ${renderTemplate`<p>happyをレンダリング</p>`}${renderTemplate`<p>finishedをレンダリング</p>`}${renderTemplate`<p>goalをレンダリング</p>`}` })}`;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/about.astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
