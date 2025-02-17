import { c as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from './astro/server_CecKvSIS.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_DTQOs-8j.mjs';

const html = () => "<h1 id=\"参考記事\">参考記事</h1>\n<ul>\n<li>rehype-tocを使用する方法\n<ul>\n<li><a href=\"https://raahii.me/posts/add-toc-to-astro-blog/\">参考記事</a></li>\n<li><a href=\"https://docs.astro.build/ja/guides/markdown-content/#markdown%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3\">公式サイト</a></li>\n</ul>\n</li>\n<li><a href=\"https://hypb.dev/articles/astrojs-tocbot/\">TocBotを使用する方法</a></li>\n<li><a href=\"https://roboin.io/article/2024/03/03/astro-custom-toc/\">astro-custom-tocを使用する方法</a></li>\n<li>render()メソッドを使用する方法\n<ul>\n<li><a href=\"https://bou7254.com/posts/astro-markdown-blog-toc\">参考記事1</a></li>\n<li><a href=\"https://egashira.dev/blog/astrojs-toc\">参考記事2</a></li>\n<li><a href=\"https://seless-hw.net/blog/2024/02/14/post/\">参考記事3</a></li>\n</ul>\n</li>\n</ul>\n<h1 id=\"コンテンツ管理を動的ページルーティング-コンテンツコレクション\">コンテンツ管理を動的ページルーティング コンテンツコレクション？</h1>\n<ol>\n<li><code>src/pages/[slug].astro</code>を作成</li>\n<li>getStaticPathsでルーティング作成</li>\n<li>各記事のfrontmatterに<code>slug</code>を追加</li>\n<li><code>http://localhost:4321/post-5</code>などにアクセスしてみる</li>\n</ol>\n<h2 id=\"astroコマンドをインストール\">astroコマンドをインストール</h2>\n<ul>\n<li>インストールコマンド\n<ul>\n<li><code>npm install -g astro</code>\n<ul>\n<li>権限エラーで失敗\n<ul>\n<li><code>sudo npm install -g astro</code>\n<ul>\n<li>成功</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>インストールしたバージョンを確認\n<ul>\n<li><code>astro -v</code>\n<ul>\n<li><code>v5.3.0 Build faster websites.</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>astroコマンド使用せずとも、.astroディレクトリあるくね？</li>\n</ul>\n<h1 id=\"コンテンツ管理にする\">コンテンツ管理にする</h1>\n<h2 id=\"参考記事-1\">参考記事</h2>\n<ul>\n<li><a href=\"https://evoworx.dev/blog/hylx27khn/\">参考記事1</a></li>\n</ul>\n<h2 id=\"手順\">手順</h2>\n<ul>\n<li><code>src/content/config.ts</code>を作成</li>\n<li>コンテンツを作成\n<ul>\n<li><code>src/content/blog/240215.mdx</code></li>\n</ul>\n</li>\n<li>mdxを使用可能にする\n<ul>\n<li><code>npx astro add mdx</code></li>\n</ul>\n</li>\n<li>vscodeの設定でmdxを使用可能にする\n<ul>\n<li><code>.vscode/settings.json</code></li>\n</ul>\n</li>\n<li>コンテンツページを作成\n<ul>\n<li><code>src/pages/blog/[...slug].astro</code>を作成\n<ul>\n<li>動的ルーティングさせる</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>コンテンツ一覧ページを作成\n<ul>\n<li><code>pages/blog/index.astro</code>\n<ul>\n<li><code>src/pages/blog.astro</code>とバッティングするため、これ削除\n<ul>\n<li>一旦バックアップ</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>---</span></span>\n<span class=\"line\"><span>import BaseLayout from \"../layouts/BaseLayout.astro\";</span></span>\n<span class=\"line\"><span>import BlogPost from \"../components/BlogPost.astro\";</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>const allPosts = await Astro.glob(\"../pages/posts/*.md\");</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>const pageTitle = \"BLOG\";</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>const mainColor = \"red\";</span></span>\n<span class=\"line\"><span>---</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>&#x3C;BaseLayout pageTitle={pageTitle} mainColor={mainColor}></span></span>\n<span class=\"line\"><span>  &#x3C;ul></span></span>\n<span class=\"line\"><span>    {allPosts.map((post) => &#x3C;BlogPost url={post.url} title={post.frontmatter.title} />)}</span></span>\n<span class=\"line\"><span>  &#x3C;/ul></span></span>\n<span class=\"line\"><span>  &#x3C;pre>{JSON.stringify(allPosts, null, 2)}&#x3C;/pre></span></span>\n<span class=\"line\"><span>&#x3C;/BaseLayout></span></span></code></pre>\n<ul>\n<li>renderを使用し、Contentと共に記事のheadingリストを取得する</li>\n<li>目次をうまい具合に出力する</li>\n</ul>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"astroで目次つけたい","pubDate":"2025-02-15T00:00:00.000Z","description":"Table of Contents, TOCを作ってみる","author":"Yusuke Shigeta","image":{"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"Astroのロゴ。"},"tags":["astro","study"],"slug":"post-5"};
				const file = "/Users/yusuke.shigeta/workspace/blog-astro/src/pages/posts/post-5.md";
				const url = "/posts/post-5";
				function rawContent() {
					return "   \n                                              \n                     \n                   \n                                           \n                        \n      \n                                                              \n                    \n                        \n              \n   \n\n# 参考記事\n- rehype-tocを使用する方法\n  - [参考記事](https://raahii.me/posts/add-toc-to-astro-blog/)\n  - [公式サイト](https://docs.astro.build/ja/guides/markdown-content/#markdownプラグイン)\n- [TocBotを使用する方法](https://hypb.dev/articles/astrojs-tocbot/)\n- [astro-custom-tocを使用する方法](https://roboin.io/article/2024/03/03/astro-custom-toc/)\n- render()メソッドを使用する方法\n  - [参考記事1](https://bou7254.com/posts/astro-markdown-blog-toc)\n  - [参考記事2](https://egashira.dev/blog/astrojs-toc)\n  - [参考記事3](https://seless-hw.net/blog/2024/02/14/post/)\n\n# コンテンツ管理を動的ページルーティング コンテンツコレクション？\n1. `src/pages/[slug].astro`を作成\n2. getStaticPathsでルーティング作成\n3. 各記事のfrontmatterに`slug`を追加\n4. `http://localhost:4321/post-5`などにアクセスしてみる\n\n## astroコマンドをインストール\n- インストールコマンド\n  - `npm install -g astro`\n    - 権限エラーで失敗\n      - `sudo npm install -g astro`\n        - 成功\n- インストールしたバージョンを確認\n  - `astro -v`\n    - `v5.3.0 Build faster websites.`\n- astroコマンド使用せずとも、.astroディレクトリあるくね？\n\n# コンテンツ管理にする\n\n## 参考記事\n- [参考記事1](https://evoworx.dev/blog/hylx27khn/)\n\n## 手順\n\n- `src/content/config.ts`を作成\n- コンテンツを作成\n  - `src/content/blog/240215.mdx`\n- mdxを使用可能にする\n  - `npx astro add mdx`\n- vscodeの設定でmdxを使用可能にする\n  - `.vscode/settings.json`\n- コンテンツページを作成\n  - `src/pages/blog/[...slug].astro`を作成\n    - 動的ルーティングさせる\n- コンテンツ一覧ページを作成\n  - `pages/blog/index.astro`\n    - `src/pages/blog.astro`とバッティングするため、これ削除\n      - 一旦バックアップ\n\n```\n---\nimport BaseLayout from \"../layouts/BaseLayout.astro\";\nimport BlogPost from \"../components/BlogPost.astro\";\n\nconst allPosts = await Astro.glob(\"../pages/posts/*.md\");\n\nconst pageTitle = \"BLOG\";\n\nconst mainColor = \"red\";\n---\n\n<BaseLayout pageTitle={pageTitle} mainColor={mainColor}>\n  <ul>\n    {allPosts.map((post) => <BlogPost url={post.url} title={post.frontmatter.title} />)}\n  </ul>\n  <pre>{JSON.stringify(allPosts, null, 2)}</pre>\n</BaseLayout>\n```\n\n- renderを使用し、Contentと共に記事のheadingリストを取得する\n- 目次をうまい具合に出力する";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"参考記事","text":"参考記事"},{"depth":1,"slug":"コンテンツ管理を動的ページルーティング-コンテンツコレクション","text":"コンテンツ管理を動的ページルーティング コンテンツコレクション？"},{"depth":2,"slug":"astroコマンドをインストール","text":"astroコマンドをインストール"},{"depth":1,"slug":"コンテンツ管理にする","text":"コンテンツ管理にする"},{"depth":2,"slug":"参考記事-1","text":"参考記事"},{"depth":2,"slug":"手順","text":"手順"}];
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
