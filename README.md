# FramejsSample

frame.js を学習するためのサンプルリポジトリです。

## Limedemo

[Vercel](https://framejs-sample.vercel.app/frames)

[Wrapcast - https://warpcast.com/mashharuki/0xeb51feff](https://warpcast.com/mashharuki/0xeb51feff)

## プロジェクトの概要

FramejsSample は、frame.js を学習するためのサンプルリポジトリです。このプロジェクトでは、frame.js のテンプレートプロジェクトの作り方や動かし方について説明しています。また、ローカルでデバッグするためのツールのセットアップ方法も提供しています。

以下はプロジェクトの概要です。

- テンプレプロジェクトの作り方: frame.js を使用したプロジェクトの作成方法について説明しています。
- 動かし方: プロジェクトのインストール方法やフロントエンドの起動方法について説明しています。
- ローカルでデバックするためのツールのセットアップ方法: @frames.js/debugger を使用してローカルでデバッグするための手順を説明しています。

参考文献として、framejs の QuickStart ガイドへのリンクも提供しています。

## テンプレプロジェクトの作り方

```bash
yarn add frames.js
```

## 動かし方

- インストール

  ```bash
  cd my-project
  yarn
  ```

- フロントエンド起動

  ```bash
  yarn dev
  ```

## ローカルでデバックするためのツールをセットアップする方法

```bash
npm install -g @frames.js/debugger
```

以下コマンドで起動できる [http://localhost:3010](http://localhost:3010)

```bash
frames
```

### 参考文献

1. [framejs - QuickStart](https://framesjs.org/#quickstart)
