import { c as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from './astro/server_CecKvSIS.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_DTQOs-8j.mjs';

const html = () => "<h1 id=\"メモ\">メモ</h1>\n<ul>\n<li>複製元: src/pages/posts/post-3.md</li>\n</ul>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"4記事目","pubDate":"2025-02-14T00:00:00.000Z","description":"astroの4投稿目","author":"Yusuke Shigeta","image":{"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"Astroのロゴ。"},"tags":["astro","study","test"],"slug":"post-4"};
				const file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "   \n                                              \n             \n                   \n                         \n                        \n      \n                                                              \n                    \n                                \n              \n   \n# メモ\n- 複製元: src/pages/posts/post-3.md";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"メモ","text":"メモ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
