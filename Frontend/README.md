# Gulp Template

For node v14 or v16

## npm パッケージをインストール

```
#プロジェクトのディレクトリに移動して
$ npm install
```

## gulp の監視

```
$ gulp
```

## 納品ファイル生成

デプロイ用のファイル一式を生成

```
$ gulp build
```

## 納品ファイル一式削除

デプロイ用のファイル一式を削除

*※ gulp 時コピーエラーなどでコケる際は del コマンドを実行するとよい</span>*

```
$ gulp del
```


## ディレクトリ構成

./src/ 内のファイルを編集

- pug -> html
- js -> babel -> js
- sass -> css

```
├─ node_modules/
│  └─ パッケージ各種
│
├─ dist/（ビルド後、納品ファイルがここに生成される）
│  ├─ assets/
│  │  ├─ fonts/
│  │  ├─ images/
│  │  ├─ css/
│  │  ├─ js/
│  │  └─ json/
│  └─ index.html など
│
├─ src/（ビルド前のソース）
│  ├─ fonts/
│  ├─ html/ (直にHTMLを生成する場合)
│  ├─ images/
│  ├─ javascript/
│  ├─ js/
│  │  ├─ components/
│  │  └─ main.js
│  ├─ json/
│  ├─ pug/
│  │  ├─ _template/
│  │  └─ index.pug
│  └─ sass/
│      ├─ foundation/
│      ├─ layout/
│      ├─ object/
│      ├─ page/
│      │  └─ index/
│      ├─ style.scss
│      └─ index.scss
│
├─ .eslintrc.json
├─ .gitignore
├─ README.md
├─ gulpfile.js
├─ package.json
├─ postcss-sorting.json
├─ scss-lint.yml
└─ webpack.config.js
```

## パッケージのバージョン管理

更新、アップデートの確認に npm-check-updates をインストールする

```
$ sudo npm install -g npm-check-updates
```

ncu コマンドでアップデート

```
$ ncu -u
```

※ `gulp-imagemin` は 8.0.0 にしないようにしてください。`"gulp-imagemin": "<=7.1.0",`
