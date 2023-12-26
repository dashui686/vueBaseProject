import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 配置@别名
import { resolve } from "path";
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
//element
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// 忽略后缀 ['.ts', '.js', '.mjs', '.jsx', '.tsx', '.json','.vue']
const extensions = ['.ts', '.js', '.mjs', '.jsx', '.tsx', '.json','.vue']


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
			//安装两行后你会发现在组件中不用再导入ref，reactive等
			imports: ['vue', 'vue-router'],
            //存放的位置
			dts: "src/auto-import.d.ts",
      //element
      resolvers: [ElementPlusResolver()],
		}),
		Components({
			// 引入组件的,包括自定义组件
      // 存放的位置
      dts: "src/components.d.ts",
      resolvers: [
        ElementPlusResolver()
      ],
		}),
  ],
  // ↓解析配置
  resolve: {
    // ↓路径别名
    alias: {
      "@": resolve(__dirname, "./src")
    },
    extensions
  }
})
