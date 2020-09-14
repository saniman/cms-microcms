# A statically generated blog example using Next.js and DatoCMS

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [microCMS](https://microcms.io/) as the data source.

## Demo

[https://cms-microcms.vercel.app/](https://cms-microcms.vercel.app/)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Blog Starter](/examples/blog-starter)

## Deploy your own

Once you have access to [the environment variables you'll need](#step-5-set-up-environment-variables), deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/vercel/next.js/tree/canary/examples/cms-datocms&env=API_KEY,API_URL&envDescription=Required%20to%20connect%20the%20app%20with%20mivtoCMS&envLink=https://vercel.link/cms-microcms-env)

## 使い方

とりあえずこのレポジトリをcloneして使ってください。

```bash
git clone git@github.com:saniman/cms-microcms.git

```

## Configuration

### Step 1. microCMSのアカウントを作ってください。

最初に, [microCMSのアカウント作ります](https://microcms.io).

その後に新しいコンテンツ（API）を作成してください。

### Step 2. まずは `Author` コンテンツ（API）を作ります。

管理画面からコンテンツ（API）を新たに作成します。

- APIのエンドポイントの名前は `Author` にしてください。

次に下記のAPIスキーマを追加してください。

- `Name` - **テキスト** フィールド 
- `Picture` - **画像** フィールド 

### Step 3. `Post` コンテンツ（API）を作ります。

管理画面からコンテンツ（API）を新たに作成します。

- TAPIのエンドポイントの名前は `Post`にしてください。

次に下記のAPIスキーマを追加してください。

- `Title` - **テキスト** フィールド 
- `Content` - **テキストエリア** フィールド
- `Excerpt` - **テキスト** フィールド 
- `Cover Image` - **メディア** フィールド 
- `Date` - **日時** フィールド 
- `Author` - **コンテンツ参照** フィールド 

### Step 4. コンテンツを入力してみましょう

コンテンツ（API)メニューから先ほど作成したAuthorメニューを選んで内容を入力しましょう。

- ダミーのデータを入れてもいいでしょう
- イメージデータはこのサイトから使ってもいいでしょう [Unsplash](https://unsplash.com/).

次にコンテンツ（API)メニューから先ほど作成したPostメニューを選んで内容を入力しましょう。

- ダミーのデータを入れてもいいでしょう
- **Content** フィールドにはマークダウンも使えます。
- イメージデータはこのサイトから使ってもいいでしょう [Unsplash](https://unsplash.com/).
- **Author** フィールドには先ほど作成したAuthorコンテンツから選択できます。

**重要:** 作成した内容をサイトで公開するには公開ボタンを押す必要があります。

### Step 5. 環境変数を設定しましょう

コンテンツ（API)メニューを洗濯した状態で上部に表示される[APIリファレンス]メニューから[ヘッダー]の箇所にある
`X-API-KEY`をコピーしましょう

次に `.env.local.example`をコピーして `.env.local`を作成します (自動的にGitのコミットからは除外されます):

```bash
cp .env.local.example .env.local
```

環境変数雨を `.env.local`に入力します:

- `API_KEY` X-API-KEYを入力します。
- `API_URL` mirsoCMSのAPI URLを入力します。(https://xxx.microcms.io/api/v1/)
- `SERVICE_ID` mirsoCMSのAPIエンドポイントを入力します。(exampleなど)

Your `.env.local` file should look like this:

```bash
API_KEY=...
API_URL=...
SERVICE_ID=...
```

### Step 6. 開発モードでNextJSを起動します。

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

[http://localhost:3000]で起動します。(http://localhost:3000)! 

### Step 7. プレビューモードを試す

microCMSは下書き保存することによって投稿を下書き状態にすることができます。

ローカルで開発をしている場合でも下記のURLで下書きの投稿をプレビューして確認することができます。

```
http://localhost:3000/api/preview?id={CONTENT_ID}&draftKey={DRAFT_KEY}
```

- `{CONTENT_ID}` はコンテンツのIDが付与されます。
- `{DRAFT_KEY}` は下書き状態の記事のキーが付与されます。


### Step 8. Vercelで公開

プロジェクトの公開はVercelで簡単にできます。 [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### ローカルのプロジェクトを公開

ローカルのプロジェクトは GitHub/GitLab/Bitbucket または [import to Vercel](https://vercel.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example)を使って公開できます.

**重要**: Vercelを使って公開する場合はVercelのプロジェクト内の **Environment Variables（環境変数）** に `.env.local` ファイルと同じ内容の変数をセットする必要があります。.

