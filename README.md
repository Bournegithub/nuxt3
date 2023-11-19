# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 安装前

Node Version 20.9.0

node 版本低、或使用 npm 时 SSR 打包可能会出现 Cannot find module/ Cannot find package 之类的问题
推荐使用 yarn

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 部署

项目 SSR 部署采用 docker 部署,yarn build 之后 jenkins 会将 Dockerfile、build.sh 文件复制到.output 文件夹.

线上生成镜像并运行容器

此项目部署在二级目录https://www.*.com/nuxt3,所以nuxt.config.js中设置了baseUrl
