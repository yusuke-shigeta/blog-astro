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