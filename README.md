- [setting](#setting)
  - [git](#git)
  - [action](#action)
  - [vscode 拡張機能](#vscode-拡張機能)
  - [mac 設定](#mac-設定)
  - [node.js をインストール](#nodejs-をインストール)
  - [ファイルジラ手順](#ファイルジラ手順)
  - [shortcut](#shortcut)
  - [astro 環境構築](#astro-環境構築)
  - [Chrome拡張機能](#chrome拡張機能)
- [url](#url)
- [npm コマンド](#npm-コマンド)
- [file](#file)
  - [src/pages/](#srcpages)
    - [index.astro](#indexastro)
    - [about.astro](#aboutastro)
    - [blog.astro](#blogastro)
  - [src/pages/posts/](#srcpagesposts)
    - [post-1.md](#post-1md)
    - [post-2.md](#post-2md)
    - [post-3.md](#post-3md)
    - [post-4.md](#post-4md)
  - [src/pages//tags/](#srcpagestags)
    - [\[tag\].astro](#tagastro)
  - [src/styles/](#srcstyles)
    - [global.css](#globalcss)
  - [src/components/](#srccomponents)
    - [Navigation.astro](#navigationastro)
    - [Footer.astro](#footerastro)
    - [Social.astro](#socialastro)
    - [Header.astro](#headerastro)
    - [Hamburger.astro](#hamburgerastro)
    - [BlogPost.astro](#blogpostastro)
  - [src/script/](#srcscript)
    - [menu.js](#menujs)
  - [src/layouts/](#srclayouts)
    - [BaseLayout.astro](#baselayoutastro)
    - [MarkdownPostLayout.astro](#markdownpostlayoutastro)

# setting

## git

- git 初期設定
  <!-- yusuke.shigeta@MacBook dev-astro % git config --global user.email "x.shigeta.x@gmail.com" -->
  <!-- yusuke.shigeta@MacBook dev-astro %   git config --global user.name "yusuke-shigeta" -->
- git clone
  `git clone https://github.com/yusuke-shigeta/dev-astro.git`
- merge 方式
  `git config pull.rebase false`

## action

- server 接続のため変数を設定

## vscode 拡張機能

- Astro
- Git Graph
- GitHub Theme
- Markdown All in One (index作成のため)

## mac 設定

- [ライブ変換を OFF](https://easytouse.jp/2018/01/23/mac-liveconversion-off/)

## node.js をインストール

- バージョン: `v18.14.1` 以降
- [nodejs 公式からダウンロード](https://nodejs.org/ja)
  ```
  This package will install:
    •Node.js v22.13.1 to /usr/local/bin/node
    •npm v10.9.2 to /usr/local/bin/npm
  ```
- インストールしたバージョン: `v22.13.1`

## ファイルジラ手順

- [xserver との繋げ方](https://www.xserver.ne.jp/manual/man_ftp_filezilla_setting.php)

## shortcut

- source control を開く
- Close AI Sidebar
  `shift command B`

## astro 環境構築

- [基本的に tutorial 通り](https://docs.astro.build/ja/tutorial/1-setup/1/)

## Chrome拡張機能

- Acid Tabs
  - タブをグループ化

# url

- [main](https://yusuke-shigeta.com/)
- [dev](http://localhost:4321/)

# npm コマンド

- `npm run dev`
  dev サーバーを起動する
- `npm run build`
  本番用にプロジェクトをビルドする

# file

- /src
  - /pages
    - index.astro
    - about.astro
    - blog.astro
    - /posts
      - post-1.md
      - post-2.md
      - post-3.md
      - post-4.md
    - /tags
      - [tag].astro
  - /styles
    - global.css
  - /components
    - Navigation.astro
    - Footer.astro
    - Social.astro
    - Header.astro
    - Hamburger.astro
    - BlogPost.astro
  - /script
    - menu.js
  - /layouts
    - BaseLayout.astro
    - MarkdownPostLayout.astro

## src/pages/
### index.astro

- [url](http://localhost:4321/)
- topページ
- layout: BaseLayout

### about.astro

- [url](http://localhost:4321/about)
- aboutページ
- layout: BaseLayout

### blog.astro

- [url](http://localhost:4321/blog)
- blogページ
- layout: BaseLayout

## src/pages/posts/
### post-1.md

- [url](http://localhost:4321/posts/post-1)

### post-2.md

- [url](http://localhost:4321/posts/post-2)

### post-3.md

- [url](http://localhost:4321/posts/post-3)

### post-4.md

- [url](http://localhost:4321/posts/post-4)
- globの動作確認のため作成

## src/pages//tags/
### [tag].astro

## src/styles/
### global.css

- サイト全体に適用させる

## src/components/
### Navigation.astro

- ヘッダのナビゲーション部分
- importしているページ
  - top
  - about
  - blog

### Footer.astro

- 共通フッター
- importしているページ
  - top
  - about
  - blog

### Social.astro

- ソーシャルメディアのリスト
- importしているコンポーネント
  - Footer.astro
- props:
  - platform
  - username

### Header.astro

- 共通ヘッダー
- importしているページ
  - top
  - about
  - blog

### Hamburger.astro

- ヘッダーハンバーガーメニュー
- mobile表示時のみ表示

### BlogPost.astro

- 記事への導線
- importしているページ
  - blog
- props
  - url
  - title

## src/script/
### menu.js

- Hamburgerメニューのscript
- importしているページ
  - top
  - about
  - blog

## src/layouts/
### BaseLayout.astro

- 使用しているページ
  - top
  - about
  - blog
- props
  - pageTitle
  - mainColor

### MarkdownPostLayout.astro

- 使用しているページ
  - 記事ページ
- props