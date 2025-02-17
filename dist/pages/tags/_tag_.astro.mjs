import { c as createComponent, r as renderTemplate } from '../../chunks/astro/server_BDs0mMKt.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$tag = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/tags/[tag].astro", void 0);

const $$file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
