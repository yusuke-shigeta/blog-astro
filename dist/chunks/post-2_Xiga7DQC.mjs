import { c as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from './astro/server_CecKvSIS.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_DTQOs-8j.mjs';

const html = () => "<h1 id=\"design\">design</h1>\n<ul>\n<li>右サイドバーに目次</li>\n<li>左サイドバーに導線</li>\n</ul>\n<h1 id=\"参考記事\">参考記事</h1>\n<ul>\n<li><a href=\"https://varubogu.com/posts/astro-notion-blog-add-headline/\">https://varubogu.com/posts/astro-notion-blog-add-headline/</a></li>\n</ul>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"デザイン","pubDate":"2025-02-11T00:00:00.000Z","description":"astroの2投稿目","author":"Yusuke Shigeta","image":{"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"Astroのロゴ。"},"tags":["astro","study","design"],"slug":"post-2"};
				const file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "   \n                                              \n             \n                   \n                         \n                        \n      \n                                                              \n                    \n                                  \n              \n   \n# design\n- 右サイドバーに目次\n- 左サイドバーに導線\n\n# 参考記事\n- https://varubogu.com/posts/astro-notion-blog-add-headline/";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"design","text":"design"},{"depth":1,"slug":"参考記事","text":"参考記事"}];
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
