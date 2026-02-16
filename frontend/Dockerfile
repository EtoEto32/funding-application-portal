FROM node:20-alpine

WORKDIR /app

# pnpmのインストール
RUN npm install -g pnpm

# 依存関係のインストール
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

# アプリケーションコードのコピー
COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host", "0.0.0.0"]
