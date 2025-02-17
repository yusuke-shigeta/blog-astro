import { c as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from './astro/server_CecKvSIS.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_DTQOs-8j.mjs';

const html = () => "<h1 id=\"メモ\">メモ</h1>\n<ul>\n<li><strong>勝手にhtmlに変換される仕様っぽい</strong></li>\n<li><code>---</code>で囲われているのはフロントマターとかいう</li>\n</ul>\n<h2 id=\"astroでできること\">astroでできること</h2>\n<ul>\n<li>定数定義, 出力</li>\n<li>mdファイルが自動でhtmlに変換されるっぽい</li>\n<li>jsの式がかける\n<ul>\n<li>フロントマターにはjsのみ\n<ul>\n<li>フロントマターscriptとかいう</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>htmlの構文が間違えてたらエラーになる場合があるっぽい</li>\n<li>条件に応じて要素をレンダリングできる</li>\n<li><code>define:vars={ {...} }</code>ディレクティブ\n<ul>\n<li>使い所ありそ</li>\n</ul>\n</li>\n<li>コンポーネント, Astroコンポーネント</li>\n<li><a href=\"https://docs.astro.build/ja/basics/astro-components/\">Astro.props 参考</a>\n<ul>\n<li>props = 小道具</li>\n</ul>\n</li>\n<li>カスタムレイアウト\n<ul>\n<li>slotはlayoutファイル</li>\n<li>ページファイルではlayoutタグを仕様</li>\n<li>レイアウトでもpropsを使用可能</li>\n<li>レイアウトを入れ子にすることも可能</li>\n</ul>\n</li>\n<li>Markdownのフロントマターでつくったやつ、<code>frontmatter</code>として配列になるらしい\n<ul>\n<li>frontmatter自由自在やん</li>\n<li>tagsとかは連想配列か？</li>\n</ul>\n</li>\n<li><a href=\"https://docs.astro.build/ja/guides/imports/#astroglob\"><code>Astro.glob()</code></a>\n<ul>\n<li>多数のファイルを一度にimportしたい時</li>\n</ul>\n</li>\n<li>getStaticPaths()</li>\n<li>デバッグはとりあえずterminalかページで見てみる\n<ul>\n<li>ページに出力する場合のコード<code>&#x3C;pre>{JSON.stringify(allPosts, null, 2)}&#x3C;/pre></code></li>\n</ul>\n</li>\n<li>動的なページルーティング</li>\n</ul>\n<h2 id=\"typescript\">typescript</h2>\n<ul>\n<li>{条件} &#x26;&#x26; ()\n<ul>\n<li><code>&#x26;&#x26;</code>で左の条件がtrueかfalseかで判定するっぽい</li>\n</ul>\n</li>\n<li>objectと配列は違う\n<ul>\n<li>object, <code>{</code>{オブジェクト名}<code>.</code>{キー}<code>}</code></li>\n<li>配列, mapを使用</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"jsxとは\">JSXとは</h2>\n<ul>\n<li><a href=\"https://typescriptbook.jp/reference/jsx\">参考記事</a></li>\n<li>特にReactで採用されているらしい</li>\n<li>JavaScriptのコードの中にHTMLタグのような構文が埋め込みできるやつ</li>\n<li>HTMLとの違い\n<ul>\n<li>属性の書き方とか…</li>\n</ul>\n</li>\n</ul>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"astro関連メモ","pubDate":"2025-02-11T00:00:00.000Z","description":"astroの1投稿目","author":"Yusuke Shigeta","image":{"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"Astroのロゴ。"},"tags":["astro","study"],"slug":"post-1","test":"frontmatter追加テスト"};
				const file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "   \n                                              \n                  \n                   \n                         \n                        \n      \n                                                              \n                    \n                        \n              \n                        \n   \n# メモ\n- **勝手にhtmlに変換される仕様っぽい**\n- `---`で囲われているのはフロントマターとかいう\n\n## astroでできること\n- 定数定義, 出力\n- mdファイルが自動でhtmlに変換されるっぽい\n- jsの式がかける\n  - フロントマターにはjsのみ\n    - フロントマターscriptとかいう\n- htmlの構文が間違えてたらエラーになる場合があるっぽい\n- 条件に応じて要素をレンダリングできる\n- `define:vars={ {...} }`ディレクティブ\n  - 使い所ありそ\n- コンポーネント, Astroコンポーネント\n- [Astro.props 参考](https://docs.astro.build/ja/basics/astro-components/)\n  - props = 小道具\n- カスタムレイアウト\n  - slotはlayoutファイル\n  - ページファイルではlayoutタグを仕様\n  - レイアウトでもpropsを使用可能\n  - レイアウトを入れ子にすることも可能\n- Markdownのフロントマターでつくったやつ、`frontmatter`として配列になるらしい\n  - frontmatter自由自在やん\n  - tagsとかは連想配列か？\n- [`Astro.glob()`](https://docs.astro.build/ja/guides/imports/#astroglob)\n  - 多数のファイルを一度にimportしたい時\n- getStaticPaths()\n- デバッグはとりあえずterminalかページで見てみる\n  - ページに出力する場合のコード`<pre>{JSON.stringify(allPosts, null, 2)}</pre>`\n- 動的なページルーティング\n\n## typescript\n- {条件} && ()\n  - `&&`で左の条件がtrueかfalseかで判定するっぽい\n- objectと配列は違う\n  - object, `{`{オブジェクト名}`.`{キー}`}`\n  - 配列, mapを使用\n\n## JSXとは\n- [参考記事](https://typescriptbook.jp/reference/jsx)\n- 特にReactで採用されているらしい\n- JavaScriptのコードの中にHTMLタグのような構文が埋め込みできるやつ\n- HTMLとの違い\n  - 属性の書き方とか...";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"メモ","text":"メモ"},{"depth":2,"slug":"astroでできること","text":"astroでできること"},{"depth":2,"slug":"typescript","text":"typescript"},{"depth":2,"slug":"jsxとは","text":"JSXとは"}];
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
