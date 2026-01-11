#!/bin/bash 

# 武器情報の更新を行う
# 対象のサイトからhtmlを取得して、武器情報の解析を行い、アイコンをダウンロードする
# ダウンロードしたアイコンを対象ディレクトリに配置・メタ情報を持つjsファイルを更新することで、情報を更新する

bun run ./downloader/v2/index.ts

rm ../images/*.png
mv ./images/*.png ../images/
rm -rf images

rm ../js/weapons.js
mv ./weapons.js ../js/weapons.js

echo "🦑 最新の情報に更新しました"

