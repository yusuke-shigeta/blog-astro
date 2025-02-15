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
