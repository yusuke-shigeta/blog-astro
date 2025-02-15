---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'astroで目次つけたい'
pubDate: 2025-02-15
description: 'Table of Contents, TOCを作ってみる'
author: 'Yusuke Shigeta'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Astroのロゴ。'
tags: ['astro', 'study']
slug: 'post-5'
---

# 参考記事
- rehype-tocを使用する方法
  - [参考記事](https://raahii.me/posts/add-toc-to-astro-blog/)
  - [公式サイト](https://docs.astro.build/ja/guides/markdown-content/#markdownプラグイン)
- [TocBotを使用する方法](https://hypb.dev/articles/astrojs-tocbot/)
- [astro-custom-tocを使用する方法](https://roboin.io/article/2024/03/03/astro-custom-toc/)
- render()メソッドを使用する方法
  - [参考記事1](https://bou7254.com/posts/astro-markdown-blog-toc)
  - [参考記事2](https://egashira.dev/blog/astrojs-toc)
  - [参考記事3](https://seless-hw.net/blog/2024/02/14/post/)

# コンテンツ管理を動的ページルーティング コンテンツコレクション？
1. `src/pages/[slug].astro`を作成
2. getStaticPathsでルーティング作成
3. 各記事のfrontmatterに`slug`を追加
4. `http://localhost:4321/post-5`などにアクセスしてみる

## astroコマンドをインストール
- インストールコマンド
  - `npm install -g astro`
    - 権限エラーで失敗
      - `sudo npm install -g astro`
        - 成功
- インストールしたバージョンを確認
  - `astro -v`
    - `v5.3.0 Build faster websites.`
- astroコマンド使用せずとも、.astroディレクトリあるくね？

# コンテンツ管理にする

## 参考記事
- [参考記事1](https://evoworx.dev/blog/hylx27khn/)

## 手順

- `src/content/config.ts`を作成
- コンテンツを作成
  - `src/content/blog/240215.mdx`
- mdxを使用可能にする
  - `npx astro add mdx`
- vscodeの設定でmdxを使用可能にする
  - `.vscode/settings.json`
- コンテンツページを作成
  - `src/pages/blog/[...slug].astro`を作成
    - 動的ルーティングさせる
- コンテンツ一覧ページを作成
  - `pages/blog/index.astro`
    - `src/pages/blog.astro`とバッティングするため、これ削除
      - 一旦バックアップ

```
---
import BaseLayout from "../layouts/BaseLayout.astro";
import BlogPost from "../components/BlogPost.astro";

const allPosts = await Astro.glob("../pages/posts/*.md");

const pageTitle = "BLOG";

const mainColor = "red";
---

<BaseLayout pageTitle={pageTitle} mainColor={mainColor}>
  <ul>
    {allPosts.map((post) => <BlogPost url={post.url} title={post.frontmatter.title} />)}
  </ul>
  <pre>{JSON.stringify(allPosts, null, 2)}</pre>
</BaseLayout>
```

- renderを使用し、Contentと共に記事のheadingリストを取得する
- 目次をうまい具合に出力する