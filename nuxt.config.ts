// https://nuxt.com/docs/api/configuration/nuxt-config

import { loadEnv } from 'vite'
import {nodeResolve} from "@rollup/plugin-node-resolve";
// interface VITE_ENV_CONFIG {
//   VITE_PACK_ENV: string,
//   VITE_PACK_URL: string,
//   VITE_API_HOST: string,
// }

// console.log('process.env', process.env);
const envScript = process.env.npm_lifecycle_script?.split(' ') || 'dev';
const envName = envScript[envScript.length - 1] // 通过启动命令区分环境
// console.log('envName', envName);
const envData = loadEnv(envName, 'env');
console.log('当前环境：', envData);

export default defineNuxtConfig({
  devtools: { enabled: true },
  // publicRuntimeConfig: envData, // 把env放入这个里面，通过useRuntimeConfig获取
  // meta: {
  //   meta: [
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  //   ],
  // },
  runtimeConfig: {
    apiKey: '', // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
    public: {
      baseURL: '/api', // Exposed to the frontend as well.
      ...envData,
    }
  },
  routeRules: {
    // 登陆页构建时预渲
    // '/login': { prerender: true },
    // 针对路径进行接口转发
    '/api/**': {
      proxy: `https://mock.apifox.cn/m1/3136188-0-default/**` 
    },
  },
  
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    'dayjs-nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  css: [
    '@/assets/css/main.css',
    'element-plus/dist/index.css',
  ],
  elementPlus: {},
  components: {
    global: true,
    dirs: ['~/components']
  },
  app: {
    // baseURL: envData.NUXT_APP_BASE_URL,
    // baseURL: '/nuxt3',
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: 'Nuxt3 ',
      meta: [
        { name: 'description', content: 'Nuxt3 site.' }
      ],
    }
  },
  vite: {
    envDir: '~/env', // 指定env文件夹
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  // 本地代理跨域

  nitro: {
    // 客户端渲染时
    devProxy: {
      '/api': {
        target: "https://mock.apifox.cn/m1/3136188-0-default", // 这里是接口地址
        changeOrigin: true,
        prependPath: true,
      },
    },
    // nodemodulesdirs
  },
})
