import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as createAstro, e as addAttribute, i as defineStyleVars, j as renderHead, d as renderSlot, k as renderScript } from './astro/server_BDs0mMKt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="nav-list" data-astro-cid-pux6a34n> <li class="nav-item" data-astro-cid-pux6a34n><a class="nav-link" href="/" data-astro-cid-pux6a34n>Home</a></li> <li class="nav-item" data-astro-cid-pux6a34n><a class="nav-link" href="/about" data-astro-cid-pux6a34n>About</a></li> <li class="nav-item" data-astro-cid-pux6a34n><a class="nav-link" href="/blog" data-astro-cid-pux6a34n>Blog</a></li> <li class="nav-item" data-astro-cid-pux6a34n><a class="nav-link" href="/tags" data-astro-cid-pux6a34n>Tag</a></li> </ul> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-3ef6ksr2": true })} </nav> </header> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "git", "username": "yusuke-shigeta", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "twiiter", "username": "yusuke-shigeta", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "instagram", "username": "yusuke-shigeta", "data-astro-cid-sz7xmlte": true })} </footer> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle, mainColor } = Astro2.props;
  const $$definedVars = defineStyleVars([{ mainColor }]);
  return renderTemplate`<html lang="ja" data-astro-cid-37fxchfa${addAttribute($$definedVars, "style")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-37fxchfa${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true })} <h1 data-astro-cid-37fxchfa${addAttribute($$definedVars, "style")}>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} ${renderScript($$result, "/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "/Users/yusuke.shigeta/workspace/blog-astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
