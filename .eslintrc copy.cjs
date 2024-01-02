module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', './.eslintrc-auto-import.json'],
  // 自定义校验规则
  rules: {
    // 要求组件名称始终为多字
    'vue/multi-word-component-names': 'off',
    // 对模板中的自定义组件强制执行 v-on 事件命名样式
    'vue/v-on-event-hyphenation': ['error'],
    // 要求控制里面内容的显示<transition>
    'vue/require-toggle-inside-transition': ['error'],
    // 弃用scope属性
    'vue/no-deprecated-scope-attribute': ['error'],
    // 弃用slot属性
    'vue/no-deprecated-slot-attribute': ['error'],
    // 弃用slot-scope属性
    'vue/no-deprecated-slot-scope-attribute': ['error'],
    // 禁止 props 中的保留名称
    'vue/no-reserved-props': [
      'error',
      {
        vueVersion: 2,
      },
    ],
    // 强制第一个属性的位置
    'vue/first-attribute-linebreak': [
      'warn',
      {
        singleline: 'beside',
        multiline: 'beside',
      },
    ],
    // 在标签的右括号之前需要或不允许有空格
    'vue/html-closing-bracket-spacing': [
      'warn',
      {
        startTag: 'always',
      },
    ],
    // html-缩进
    'vue/html-indent': ['warn', 4],
    // 强制每行的最大属性数
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 2,
        multiline: 1,
      },
    ],
    // 禁止使用 v-html 来防止 XSS 攻击
    'vue/no-v-html': 'off',
    // 在打开和关闭块级标签之前强制换行
    'vue/block-tag-newline': [
      'warn',
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 1,
      },
    ],
    // 为模板中的组件命名样式强制执行特定的大小写
    'vue/component-name-in-template-casing': ['error'],
    // Components在选项中强制组件名称的大小写
    'vue/component-options-name-casing': ['error'],
    // 为自定义事件名称强制使用特定大小写
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    // 在 HTML 注释中强制统一间距
    'vue/html-comment-content-spacing': ['warn'],
    // 在 HTML 注释中强制使用一致的缩进
    'vue/html-comment-indent': ['warn'],
    // 禁止元素的子内容，这些内容将被类似的指令v-html覆盖v-text
    'vue/no-child-content': ['error'],
    // 使用时强制inheritAttrs设置为falsev-bind="$attrs"
    'vue/no-duplicate-attr-inheritance': ['warn'],
    // 不允许<template> <script> <style>块为空
    'vue/no-empty-component-block': ['warn'],
    // 需要模型选项中的有效键
    'vue/no-invalid-model-keys': ['error'],
    // 不允许在您的组件属性中出现潜在的拼写错误
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['all'],
      },
    ],
    // 不允许在组件定义中使用保留名称
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: true,
      },
    ],
    // 要求组件名称属性匹配其文件名
    // "vue/match-component-file-name": ["error", {
    //   "extensions": ["vue"],
    //   "shouldMatchCase": false
    // }],
    // 禁止this在beforeRouteEnter方法中使用
    'vue/no-this-in-before-route-enter': ['error'],
    // 在指定版本上禁止不支持的 Vue.js 语法
    'vue/no-unsupported-features': [
      'error',
      {
        version: '^3.2.0',
      },
    ],
    // 不允许不必要的胡须插值
    'vue/no-useless-mustaches': ['warn'],
    // 禁止不必要的v-bind指令
    'vue/no-useless-v-bind': ['warn'],
    // 禁止组件上的 v-text / v-html
    'vue/no-v-text-v-html-on-component': ['warn'],
    // 要求或禁止块之间的填充线
    'vue/padding-line-between-blocks': ['warn'],
    // V-bind当value为时需要简写形式属性true
    'vue/prefer-true-attribute-shorthand': ['warn'],
    // 在 Vue 组件中需要 name 属性
    'vue/require-name-property': ['warn'],
    // 强制v-for指令的分隔符样式
    'vue/v-for-delimiter-style': ['warn', 'of'],

    /** 扩展规则 */
    // 在数组括号内强制保持一致的间距<template>
    'vue/array-bracket-spacing': ['warn'],
    // 在箭头函数中的箭头前后强制保持一致的间距<template>
    'vue/arrow-spacing': ['warn'],
    // 在打开块之后和关闭块之前禁止或强制块内的空格<template>
    'vue/block-spacing': ['warn'],
    // 对中的块强制执行一致的大括号样式<template>
    'vue/brace-style': ['warn'],
    // 强制执行驼峰命名约定<template>
    'vue/camelcase': ['warn'],
    // 要求或不允许使用尾随逗号<template>
    'vue/comma-dangle': ['warn'],
    // 在逗号前后强制保持一致的间距<template>
    'vue/comma-spacing': ['warn'],
    // 强制使用一致的逗号样式<template>
    'vue/comma-style': ['warn'],
    // 需要使用===和!==在<template>
    'vue/eqeqeq': ['error'],
    // 要求或禁止函数标识符及其调用之间的间距<template>
    'vue/func-call-spacing': ['warn'],
    // 在对象文字属性中强制键和值之间的间距一致<template>
    'vue/key-spacing': ['warn'],
    // 在关键字前后强制保持一致的间距<template>
    'vue/keyword-spacing': ['warn'],
    // 不允许在条件中使用常量表达式<template>
    // "vue/no-constant-condition":["warn"],
    // 不允许不必要的括号<template>
    'vue/no-extra-parens': ['warn'],
    // 禁止稀疏数组<template>
    'vue/no-sparse-arrays': ['error'],
    // 不允许不必要的文字或模板文字串联<template>
    'vue/no-useless-concat': ['warn'],
    // 在大括号内强制保持一致的间距<template>
    'vue/object-curly-spacing': ['warn', 'always'],
    // 强制将对象属性放置在单独的行中<template>
    'vue/object-property-newline': ['warn'],
    // 在打开大括号之后和关闭大括号之前强制执行一致的换行符<template>
    'vue/object-curly-newline': ['warn', { minProperties: 2 }],
    // 要求或禁止对象字面量的方法和属性简写语法<template>
    'vue/object-shorthand': ['warn', 'always'],
    // 需要模板文字而不是字符串连接<template>
    'vue/prefer-template': ['warn'],
    // 在括号内强制保持一致的间距<template>
    'vue/space-in-parens': ['warn', 'never'],
    // 中缀运算符周围需要间距<template>
    'vue/space-infix-ops': ['warn'],
    // 要求或禁止在模板字符串的嵌入表达式周围有空格<template>
    'vue/template-curly-spacing': ['error', 'always'],
    'accessor-pairs': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: [
      0,
      {
        properties: 'always',
      },
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [2, 'allow-null'],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'handle-callback-err': [2, '^(err|error)$'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
      },
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 'warn',
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never',
      },
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [2, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
      },
    ],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false,
      },
    ],
    'array-bracket-spacing': [2, 'never'],
  },
}
