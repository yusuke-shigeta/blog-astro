import { c as createComponent, a as createAstro, j as defineStyleVars, r as renderTemplate, d as addAttribute, k as renderHead, e as renderSlot, f as renderScript, m as maybeRenderHead, b as renderComponent } from './astro/server_B4_qSRoV.mjs';
/* empty css                          */
import 'clsx';
import 'kleur/colors';

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle, mainColor } = Astro2.props;
  const $$definedVars = defineStyleVars([{ mainColor }]);
  return renderTemplate`<html lang="ja" data-astro-cid-37fxchfa${addAttribute($$definedVars, "style")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-37fxchfa${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/BaseLayout.astro", void 0);

const $$NavList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="nav-list" data-astro-cid-6nrrukl3> <li class="nav-item" data-astro-cid-6nrrukl3><a class="nav-link" href="/" data-astro-cid-6nrrukl3>Home</a></li> <li class="nav-item" data-astro-cid-6nrrukl3><a class="nav-link" href="/about/" data-astro-cid-6nrrukl3>About</a></li> <li class="nav-item" data-astro-cid-6nrrukl3><a class="nav-link" href="/blog/" data-astro-cid-6nrrukl3>Blog</a></li> <li class="nav-item" data-astro-cid-6nrrukl3><a class="nav-link" href="/blog/tag/" data-astro-cid-6nrrukl3>Tag</a></li> </ul> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/NavList.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { pageTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <h1 class="title" data-astro-cid-3ef6ksr2>${pageTitle}</h1> <nav data-astro-cid-3ef6ksr2> ${renderComponent($$result, "NavList", $$NavList, { "data-astro-cid-3ef6ksr2": true })} </nav> </header> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>フッター</footer> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };
