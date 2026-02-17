```
funding-application-portal/
├── docker-compose.yml          # Docker Compose設定
├── .env.example                # 環境変数テンプレート
├── .gitignore                  # Git除外設定
├── README.md                   # プロジェクト説明書
│
├── backend/                    # バックエンド（FastAPI）
│   ├── Dockerfile              # バックエンド用Dockerイメージ定義
│   ├── requirements.txt        # Python依存関係
│   ├── main.py                 # FastAPIアプリケーションのエントリーポイント
│   ├── .dockerignore           # Dockerビルド除外設定
│   └── routers/                # APIルーター
│       ├── __init__.py         # Pythonパッケージ初期化
│       └── auth.py             # 認証関連のAPIエンドポイント
│
└── frontend/                   # フロントエンド（React + Vite）
    ├── Dockerfile              # フロントエンド用Dockerイメージ定義
    ├── package.json            # Node.js依存関係とスクリプト
    ├── vite.config.ts          # Vite設定（プロキシ設定含む）
    ├── tsconfig.json           # TypeScript設定
    ├── tailwind.config.js      # TailwindCSS設定
    ├── postcss.config.js       # PostCSS設定
    ├── index.html              # HTMLエントリーポイント
    ├── .dockerignore           # Dockerビルド除外設定
    └── src/                    # ソースコード
        ├── main.tsx            # Reactアプリケーションのエントリーポイント
        ├── App.tsx             # メインアプリケーションコンポーネント
        ├── index.css           # グローバルスタイル
        └── admin/              # react-admin関連コード
            ├── AdminApp.tsx    # react-adminのメインアプリケーション
            ├── dataProvider.ts # データプロバイダー（API通信）
            ├── authProvider.ts # 認証プロバイダー
            ├── types.ts        # TypeScript型定義
            ├── layouts/        # レイアウトコンポーネント
            │   ├── AdminLayout.tsx      # 管理者用レイアウト
            │   └── ApproverLayout.tsx   # 承認者用レイアウト
            ├── components/      # 共通コンポーネント
            │   ├── AdminAppBar.tsx       # 管理者用アプリバー
            │   ├── ApproverAppBar.tsx   # 承認者用アプリバー
            │   ├── AdminMenu.tsx         # 管理者用メニュー
            │   └── ApproverMenu.tsx     # 承認者用メニュー
            ├── pages/          # ページコンポーネント
            │   ├── AdminDashboard.tsx   # 管理者ダッシュボード
            │   └── ApproverDashboard.tsx # 承認者ダッシュボード
            └── login/          # ログイン関連
                └── LoginPage.tsx        # ログインページ
```