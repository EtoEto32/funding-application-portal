# Haiku-type
## 要件定義書
https://airy-ghost-31b.notion.site/Haiku-type-30cf0040e86480c197edc519a78a20c9?source=copy_link  
## プロジェクト構成

```
funding-application-portal/
├── docker-compose.yml          # Docker Compose設定
├── .env.example                # 環境変数テンプレート
├── .gitignore                  # Git除外設定
├── backend/                    # バックエンド（FastAPI）
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── main.py
│   └── .dockerignore
└── frontend/                   # フロントエンド（React + Vite）
    ├── Dockerfile
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── index.html
    ├── .dockerignore
    └── src/
        ├── main.tsx
        ├── App.tsx
        └── index.css
```

## 技術スタック

### フロントエンド
- React 18
- TypeScript
- Vite
- TailwindCSS
- pnpm

### バックエンド
- FastAPI
- Python 3.11
- Uvicorn
- SQLAlchemy
- PostgreSQL

### インフラ
- Docker Compose
- PostgreSQL 16

### 認証

## 初回セットアップ手順

### 1. 環境変数の設定

`.env.example`をコピーして`.env`ファイルを作成：

```bash
cp .env.example .env
```

必要に応じて`.env`ファイルの値を編集してください。

### 2. Dockerコンテナの起動

```bash
docker-compose up -d --build
```

初回起動時は、以下の処理が自動的に実行されます：
- PostgreSQLデータベースの初期化
- バックエンドの依存関係インストール
- フロントエンドの依存関係インストール（pnpm）

### 3. 動作確認

- **フロントエンド**: http://localhost:5173
- **バックエンドAPI**: http://localhost:8000
- **APIドキュメント**: http://localhost:8000/docs

### 4. ログの確認

```bash
# すべてのサービスのログを確認
docker-compose logs -f

# 特定のサービスのログを確認
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f db
```

## 開発時の使い方

### ホットリロード

ボリュームマウントにより、以下の変更が自動的に反映されます：

- **フロントエンド**: `frontend/src/`内のファイルを編集すると自動リロード
- **バックエンド**: `backend/`内のPythonファイルを編集すると自動リロード

### コンテナの停止・再起動

```bash
# 停止
docker-compose stop

# 再起動
docker-compose restart

# 完全に削除（データベースのデータも削除）
docker-compose down -v
```

### データベースへの接続

```bash
# PostgreSQLコンテナに接続
docker-compose exec db psql -U postgres -d funding_portal

# または、ホストから接続（ポート5432）
psql -h localhost -U postgres -d funding_portal
```

## APIプロキシ設定

フロントエンドからバックエンドAPIへのリクエストは、`/api`パス経由で自動的にプロキシされます。

例：
- フロントエンド: `fetch('/api/health')`
- 実際のリクエスト先: `http://backend:8000/health`

## 本番環境への拡張

本番環境へのデプロイを考慮した設計になっています：

1. **環境変数の分離**: `.env`ファイルで環境ごとの設定を管理
2. **マルチステージビルド対応**: Dockerfileを拡張可能な構造に
3. **ヘルスチェック**: データベースのヘルスチェックを実装
4. **ネットワーク分離**: 各サービスを独立したネットワークで管理

### 本番環境向けの推奨設定

- `.env`ファイルを環境ごとに管理（本番環境では`.env.production`など）
- フロントエンドのビルドを事前に実行（`pnpm build`）
- データベースのバックアップ戦略を実装
- HTTPS対応（リバースプロキシの追加）
- ログ管理の強化

## トラブルシューティング

### ポートが既に使用されている場合

`.env`ファイルでポート番号を変更してください。

### コンテナが起動しない場合

```bash
# ログを確認
docker-compose logs

# コンテナを再ビルド
docker-compose up -d --build --force-recreate
```

### 依存関係の更新

```bash
# バックエンド
docker-compose exec backend pip install -r requirements.txt

# フロントエンド
docker-compose exec frontend pnpm install
```
