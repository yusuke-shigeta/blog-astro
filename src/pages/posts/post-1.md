---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'astro関連メモ'
pubDate: 2025-02-11
description: 'astroの1投稿目'
author: 'Yusuke Shigeta'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Astroのロゴ。'
tags: ['astro', 'study']
slug: 'post-1'
test: "frontmatter追加テスト"
---
# メモ
- **勝手にhtmlに変換される仕様っぽい**
- `---`で囲われているのはフロントマターとかいう

## astroでできること
- 定数定義, 出力
- mdファイルが自動でhtmlに変換されるっぽい
- jsの式がかける
  - フロントマターにはjsのみ
    - フロントマターscriptとかいう
- htmlの構文が間違えてたらエラーになる場合があるっぽい
- 条件に応じて要素をレンダリングできる
- `define:vars={ {...} }`ディレクティブ
  - 使い所ありそ
- コンポーネント, Astroコンポーネント
- [Astro.props 参考](https://docs.astro.build/ja/basics/astro-components/)
  - props = 小道具
- カスタムレイアウト
  - slotはlayoutファイル
  - ページファイルではlayoutタグを仕様
  - レイアウトでもpropsを使用可能
  - レイアウトを入れ子にすることも可能
- Markdownのフロントマターでつくったやつ、`frontmatter`として配列になるらしい
  - frontmatter自由自在やん
  - tagsとかは連想配列か？
- [`Astro.glob()`](https://docs.astro.build/ja/guides/imports/#astroglob)
  - 多数のファイルを一度にimportしたい時
- getStaticPaths()
- デバッグはとりあえずterminalかページで見てみる
  - ページに出力する場合のコード`<pre>{JSON.stringify(allPosts, null, 2)}</pre>`
- 動的なページルーティング

## typescript
- {条件} && ()
  - `&&`で左の条件がtrueかfalseかで判定するっぽい
- objectと配列は違う
  - object, `{`{オブジェクト名}`.`{キー}`}`
  - 配列, mapを使用

## JSXとは
- [参考記事](https://typescriptbook.jp/reference/jsx)
- 特にReactで採用されているらしい
- JavaScriptのコードの中にHTMLタグのような構文が埋め込みできるやつ
- HTMLとの違い
  - 属性の書き方とか...