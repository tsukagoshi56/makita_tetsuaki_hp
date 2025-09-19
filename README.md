# Makita Home

Vercel へのデプロイを想定した Next.js 13 (App Router) + Tailwind CSS のホームページです。ローカルでの開発と本番公開の手順をこのドキュメントにまとめています。

## 開発環境のセットアップ

1. Node.js 18 以上を用意します（`node -v` で確認できます）。
2. 依存パッケージをインストールします。

   ```bash
   npm install
   ```

3. 開発サーバーを起動し、`http://localhost:3000` にアクセスします。

   ```bash
   npm run dev
   ```

変更はホットリロードされるため、`src/app/page.tsx` を編集するとブラウザに即時反映されます。

## 利用できる npm スクリプト

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: 本番ビルドを作成します。
- `npm run start`: ビルド済みアプリをローカルで起動します。
- `npm run lint`: ESLint による静的解析を実行します。

## Vercel で公開する手順

1. GitHub / GitLab / Bitbucket いずれかのリポジトリにこのプロジェクトを push します。
2. [Vercel](https://vercel.com/) にログインし、「New Project」をクリックします。
3. 1 で用意したリポジトリをインポートすると、フレームワークとして Next.js が自動認識されます。
4. ビルドコマンド、出力ディレクトリ（`.next`）は自動設定されるため、そのまま「Deploy」を実行します。
5. 数十秒ほどでデプロイが完了し、`https://xxxx.vercel.app` のようなプレビュー URL で公開されます。
6. 独自ドメインを利用する場合は、プロジェクトの「Domains」タブから追加し、DNS を設定します。

## プロジェクト構成メモ

- `src/app/page.tsx`: サイト本体のコンテンツ。Tailwind CSS でセクションを構成しています。
- `src/app/globals.css`: 全体のスタイル。Tailwind の設定が読み込まれます。
- `public/`: 画像やアイコンなどの静的ファイルを配置します。

必要に応じてプラットフォームの分析タグやフォーム連携などを追加して、公開サイトを発展させてください。
