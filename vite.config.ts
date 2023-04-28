import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from "path"  //这个path用到了上面安装的@types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // mock服务
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: "./src/mock/",
    }),

  ],
  resolve: {
    alias: {
      '@': path.resolve('./src') // @代替src
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了 给导入的路径最后加上 ; 
        additionalData: '@import "./src/assets/scss/var.scss";'
      }
    }
  }
})
