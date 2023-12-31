# vueBaseProject
vue初始化项目 VUE+TS+PINIA
Element-plus

依赖
"dependencies": {
   "@types/node": "^20.10.5",
   "axios": "^1.6.2",
   "element-plus": "^2.4.4",
   "eslint-config-prettier": "^9.1.0",
   "js-cookie": "^3.0.5",
   "pinia": "^2.1.7",
   "pinia-plugin-persistedstate": "^3.2.1",
   "sass": "^1.69.5",
   "vue": "^3.3.11",
   "vue-i18n": "^9.8.0",
   "vue-router": "4"
},
"devDependencies": {
   "@typescript-eslint/eslint-plugin": "^6.16.0",
   "@typescript-eslint/parser": "^6.16.0",
   "@vitejs/plugin-vue": "^4.5.2",
   "eslint": "^8.56.0",
   "eslint-plugin-vue": "^9.19.2",
   "less": "^4.2.0",
   "scss": "^0.2.4",
   "typescript": "^5.3.3",
   "typescript-eslint-parser": "^22.0.0",
   "unplugin-auto-import": "^0.17.2",
   "unplugin-vue-components": "^0.26.0",
   "vite": "^5.0.10",
   "vue-tsc": "^1.8.25"
}, 




# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.