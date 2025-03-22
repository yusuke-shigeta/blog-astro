---
status: 1
date: 2025-03-21
update: 2025-03-21
title: "勉強"
description: "gitの設定やってみる"
thumbnail: "astro_thumb.jpg"
tags: ["study"]
---

| date  | name              |
| :---: | :---------------- |
| 03/20 | [Q25001](#q25001) |
| 03/20 | [Q25002](#q25002) |
| 03/20 | [Q25003](#q25003) |

## Questions

### Q25001

**概要:**

リポジトリをローカルにクローンし、クローンしたローカルリポジトリに、リモートリポジトリを登録してみる

1. workspace フォルダを vscode で開く
2. vscode でターミナルを開く
3. workspace フォルダで、以下のコマンドを叩く
   - `git clone https://github.com/yusuke-shigeta/study-design.git`
4. workspace フォルダの直下に、「study-design」フォルダが追加されたことを確認
5. study-design フォルダを vscode で開く
6. vscode でターミナルを開く
7. study-design フォルダで以下のコマンドを叩く
   - `git remote add origin git@github.com:yusuke-shigeta/study-design.git`
     - もしエラーが出た場合は以下のコマンドを叩く
       - `https://github.com/yusuke-shigeta/study-design.git`
8. study-design フォルダで以下のコマンドを叩く
   - `git remote -v`
9. 以下のような感じで出力されれば ok
   ```
   origin  https://github.com/yusuke-shigeta/study-design.git (fetch)
   origin  https://github.com/yusuke-shigeta/study-design.git (push)
   ```

#### 補足

- ⚪︎⚪︎ フォルダを vscode で開く方法は？
  - vscode を新規ウィンドウで開く。
    - ショートカット: `Ctrl + Shift + N`
- vscode でターミナルを開く方法は？
  - ショートカット: `Ctrl + J`
- `git clone`コマンドとは？
  - リモートリポジトリをローカルリポジトリとしてコピーするためのコマンド。
    - ローカルリポジトリとは？
      - 自分の PC 上にある Git のリポジトリのこと。
      - オフライン。
    - リモートリポジトリとは？
      - オンライン上にある Git リポジトリのこと。
      - インターネットを通じて他の開発者と共同でコードを管理・共有できる。
- `git init`コマンドとは？
  - Git リポジトリを新しく作成するためのコマンド。実行すると、そのディレクトリが Git によってバージョン管理されるようになる。
- `git remote add`コマンドとは？
  - ローカルリポジトリに リモートリポジトリを登録するためのコマンド。
- `git remote -v`コマンドとは？
  - 現在のローカルリポジトリに登録されているリモートリポジトリを一覧表示するためのコマンド。

### Q25002

**概要:**

ファイルを作成してみる

1. study-design フォルダを vscode で開く
2. study-design フォルダ直下に、「Q25-002」フォルダを作成
3. Q25-002 フォルダ直下に、「index.html」ファイルを作成

### Q25003

**概要:**

Q25-002 での行った変更をリモートリポジトリにプッシュしてみる

1. vscode で、「Source Control」を開く。
2. Q25-002 で行った変更が問題ないことを確認。
   - 具体的にいうと、Q25-002 フォルダ直下に、「index.html」ファイルを作成されていることの確認が取れれば ok。
3. 新規ブランチ `yamaguchi-Q25002`を作成。
4. ブランチを、`yamaguchi-Q25002`に切り替える。
5. 変更したファイルをステージングエリアに追加する。
6. ステージングエリアに追加された変更をローカルリポジトリに記録する。
7. ローカルリポジトリの変更をリモートリポジトリに送信（アップロード）する。
8. github で、問題なくリモートリポジトリにアップロードされたか確認

#### 補足

- vscode で 「Source Control」 を開く方法は？
  - ショートカット: `Ctrl + Shift G`
- 新規ブランチの作成方法は？
  - test
- ブランチを切り替える方法は？
  - `git checkout`コマンドを使用。以下が基本構文。
    - `git checkout <ブランチ名>`
  - とりあえず今回は、`git checkout yamaguchi-Q25002`で ok。
- ステージングエリアとは？
  - Git で コミットする前にファイルを一時的に保存しておく場所
    - 変更したファイルをステージングエリアに追加する方法は？
      - `git add <ファイル名>` 又は `git add .`
        - `git add .`は変更したファイルを全てステージングエリアに追加する git コマンド
- ステージングエリアに追加された変更をローカルリポジトリに記録する方法は？
  - `git commit`コマンドを使用。以下が基本構文。
    - `git commit -m "コミットメッセージ"`
      - -m "コミットメッセージ"：コミットの内容を簡潔に説明するメッセージ。変更内容を記録するための情報になる。
- ローカルリポジトリの変更をリモートリポジトリに送信（アップロード）する方法とは？
  - `git push` コマンドを使用。以下が git push の基本構文
    - `git push <リモート名> <ブランチ名>`
      - <リモート名>：プッシュするリモートリポジトリの名前（通常は origin）
      - <ブランチ名>：プッシュするローカルのブランチ名（例: main、develop）
  - とりあえず今回は、`git push origin yamaguchi-Q25002`で ok。
