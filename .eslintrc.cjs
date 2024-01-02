module.exports = {
  // "parser": "@typescript-eslint/parser",
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    // prettier  Delete `␍` prettier/prettier 错误
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // TypeScript 相关规则
    '@typescript-eslint/no-empty-function': 'off', // 允许空函数
    '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off', // 允许使用非空断言
    '@typescript-eslint/ban-types': 'off', // 允许使用特定类型的 ban
    '@typescript-eslint/ban-ts-ignore': 'off', // 允许使用 @ts-ignore 注释
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_', // 允许使用未使用的参数，以 "_" 开头的参数不报警告
        varsIgnorePattern: '^_', // 允许使用未使用的变量，以 "_" 开头的变量不报警告
      },
    ],

    // JavaScript 相关规则（非 TypeScript）
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_', // 允许使用未使用的参数，以 "_" 开头的参数不报警告
        varsIgnorePattern: '^_', // 允许使用未使用的变量，以 "_" 开头的变量不报警告
      },
    ],

    // Vue 相关规则
    'vue/v-on-event-hyphenation': 'off', // 关闭事件名中连字符的强制使用
    'vue/custom-event-name-casing': 'off', // 关闭自定义事件名的大小写强制规定
    'vue/component-definition-name-casing': 'off', // 关闭组件定义的命名强制规定
    'vue/attributes-order': 'off', // 关闭属性排序的强制规定
    'vue/one-component-per-file': 'off', // 关闭每个文件只定义一个组件的强制规定
    'vue/html-closing-bracket-newline': 'off', // 关闭闭合标签的强制换行
    'vue/max-attributes-per-line': 'off', // 关闭每行属性的最大数量限制
    'vue/multiline-html-element-content-newline': 'off', // 关闭多行 HTML 元素内容的强制换行
    'vue/singleline-html-element-content-newline': 'off', // 关闭单行 HTML 元素内容的强制换行
    'vue/attribute-hyphenation': 'off', // 关闭属性名中的连字符强制规定
    'vue/html-self-closing': 'off', // 关闭自闭合标签的强制规定
    'vue/require-default-prop': 'off', // 关闭要求默认属性的强制规定
    'vue/no-arrow-functions-in-watch': 'off', // 关闭 watch 中使用箭头函数的强制规定
    'vue/no-v-html': 'off', // 关闭使用 v-html 指令的强制规定
    'vue/comment-directive': 'off', // 关闭注释指令的强制规定
    'vue/multi-word-component-names': 'off', // 关闭组件名使用多个单词的强制规定
    'vue/require-prop-types': 'off', // 关闭要求使用 prop 类型定义的强制规定
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变

    // 其他 JavaScript 相关规则
    'no-useless-escape': 'off', // 关闭不必要的转义字符的强制规定
    'no-sparse-arrays': 'off', // 关闭稀疏数组的强制规定
    'no-prototype-builtins': 'off', // 关闭直接在对象实例上调用 hasOwnProperty、isPrototypeOf 或 propertyIsEnumerable 的强制规定
    'no-use-before-define': 'off', // 关闭使用前未定义的变量的强制规定
    'no-case-declarations': 'off', // 关闭在 case 子句中使用词法声明的强制规定

    // 通用规则
    // eslint（https://eslint.bootcss.com/docs/rules/）
    quotes: [
      2,
      'single',
      {
        avoidEscape: true, // 允许字符串中的引号为单引号，除非需要转义
        allowTemplateLiterals: true, // 允许字符串使用模板字面量
      },
    ],
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off', // 关闭 console 使用的强制规定
    'vue/html-indent': 'off', // 关闭 HTML 缩进的强制规定
    'new-parens': 2, // new 操作符必须有圆括号
    'no-array-constructor': 2, // 禁止使用 Array 构造函数
    'no-caller': 2, // 禁用 caller 或 callee
    'no-class-assign': 2, // 禁止对类重新赋值
    'no-cond-assign': 2, // 禁止在条件语句中使用赋值操作符
    'no-const-assign': 2, // 禁止修改 const 声明的变量
    'no-control-regex': 0, // 允许在正则表达式中使用控制字符
    'no-delete-var': 2, // 禁止删除变量
    'no-dupe-args': 2, // 禁止在函数参数中使用重复的参数名
    'no-dupe-class-members': 2, // 禁止类成员中有重复的名称
    'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, // 禁止 switch 语句中出现重复的 case 标签
    'no-empty-character-class': 2, // 禁止在正则表达式中出现空字符集
    'no-empty-pattern': 2, // 禁止使用空解构模式
    'no-eval': 2, // 禁用 eval 函数
    'no-ex-assign': 2, // 禁止在 catch 子句中重新分配异常变量
    'no-extend-native': 2, // 禁止扩展原生对象
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔类型转换
    'no-extra-parens': [2, 'functions'], // 禁止不必要的括号，但允许在箭头函数周围使用括号
    'no-fallthrough': 2, // 禁止 switch 语句的 case 语句落空
    'no-floating-decimal': 2, // 禁止浮点小数点之前或之后没有数字
    'no-func-assign': 2, // 禁止对 function 声明重新赋值
    'no-implied-eval': 2, // 禁止使用隐式的 eval
    'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的语句块中出现变量或 function 声明
    'no-invalid-regexp': 2, // 禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-irregular-whitespace': 2, // 禁止在字符串和注释之外不规则的空白
    'no-iterator': 2, // 禁止使用 __iterator__ 属性
    'no-label-var': 2, // 禁止变量名与父级作用域内的标签名相同
    'no-labels': [
      2,
      {
        allowLoop: false, // 不允许在循环语句中使用标签
        allowSwitch: false, // 不允许在 switch 语句中使用标签
      },
    ],
    'no-lone-blocks': 2, // 禁止不必要的块嵌套
    'no-mixed-spaces-and-tabs': 2, // 禁止使用混合的空格和制表符缩进
    'no-multi-spaces': 2, // 禁止出现多个连续空格
    'no-multi-str': 2, // 禁止使用多行字符串
    'no-multiple-empty-lines': [
      2,
      {
        max: 1, // 最多允许连续的空行数为 1
      },
    ],
    'no-native-reassign': 2, // 禁止对原生对象或只读的全局对象进行赋值
    'no-negated-in-lhs': 2, // 禁止在 in 表达式的左侧使用取反操作符
    'no-new-object': 2, // 禁止使用 Object 构造函数创建对象
    'no-new-require': 2, // 禁止使用 new require
    'no-new-symbol': 2, // 禁止使用 new Symbol
    'no-new-wrappers': 2, // 禁止使用 new 创建基本数据类型的实例
    'no-obj-calls': 2, // 禁止将全局对象作为函数调用
    'no-octal': 2, // 禁止使用八进制数字
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2, // 禁止使用 __dirname 和 __filename 进行字符串拼接
    'no-proto': 2, // 禁止使用 __proto__ 属性
    'no-redeclare': 2, // 禁止重复声明变量
    'no-regex-spaces': 2, // 禁止正则表达式中的多个空格
    'no-return-assign': [2, 'except-parens'], // 禁止在返回语句中赋值，除非使用括号将赋值语句括起来
    'no-self-assign': 2, // 禁止自我赋值
    'no-self-compare': 2, // 禁止自我比较
    'no-sequences': 2, // 禁止使用逗号操作符
    'no-shadow-restricted-names': 2, // 禁止声明与关键字相同的变量名
    'no-spaced-func': 2, // 函数名和括号之间不允许有空格
    'no-this-before-super': 2, // 在构造函数中禁止在调用 super() 之前使用 this 或 super
    'no-throw-literal': 2, // 禁止抛出字面量异常
    'no-trailing-spaces': 2, // 禁止行尾空格
    // 'no-undef': 2, // 禁止使用未定义的变量
    // 'no-undef-init': 2, // 禁止将变量初始化为 undefined
    'no-unexpected-multiline': 2, // 禁止使用令人困惑的多行表达式
    'no-unmodified-loop-condition': 2, // 禁止循环中出现不变的条件
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false, // 禁止不必要的三元表达式
      },
    ],
    'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句，例如 return、throw、break 和 continue
    'no-useless-call': 2, // 禁止不必要的 call 和 apply
    'no-useless-computed-key': 2, // 禁止在对象字面量中使用不必要的计算属性
    'no-useless-constructor': 2, // 禁止不必要的构造函数
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'no-with': 2, // 禁用 with 语句
    'one-var': [
      2,
      {
        initialized: 'never', // 强制变量声明放在一起，但初始化可以分开
      },
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before', // 三元表达式中问号前要换行
          ':': 'before', // 三元表达式中冒号前要换行
        },
      },
    ],
    'padded-blocks': [2, 'never'], // 禁止块内填充
    semi: [2, 'never'], // 禁止使用分号
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ], // 分号前禁止空格，分号后必须有空格
    'space-before-blocks': [2, 'always'], // 代码块前要有空格
    // 'space-before-function-paren': [2, 'never'], // 函数参数列表前不允许有空格
    'space-in-parens': [2, 'never'], // 圆括号内不允许有空格
    'space-infix-ops': 2, // 操作符周围要有空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ], // 一元操作符前后要有空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','], // 注释前要有空格
      },
    ],
    'template-curly-spacing': 'off', // 允许模板字符串中的花括号前后有空格
    'use-isnan': 2, // 禁止比较时使用 NaN，要使用 isNaN() 函数
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'], // 立即执行函数表达式用括号包裹
    'yield-star-spacing': [2, 'both'], // yield* 表达式中 * 前后都要有空格
    yoda: [2, 'never'], // 禁止尤达条件
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false, // 对象字面量中的空格不允许有对象字面量
      },
    ],
    'array-bracket-spacing': [2, 'never'], // 数组字面量中的空格不允许有空格
    'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ], // 箭头函数的箭头前后的空格
    'block-spacing': [2, 'always'], // 代码块花括号内的空格规则
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ], // 大括号风格
    camelcase: [
      0,
      {
        properties: 'always',
      },
    ], // 强制驼峰命名规则
    // 'comma-dangle': [2, 'never'], // 禁止对象字面量中逗号结尾
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ], // 逗号前禁止空格，逗号后必须有空格
    'comma-style': [2, 'last'], // 逗号风格
    'constructor-super': 2, // 要求构造函数中有 super() 的调用
    curly: [2, 'multi-line'], // 要求 if 语句使用花括号
    'dot-location': [2, 'property'], // 强制点号和属性放在同一行
    'eol-last': 2, // 要求文件末尾存在空行
    eqeqeq: ['error', 'always', { null: 'ignore' }], // 强制使用全等
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ], // generator 函数中 * 前后的空格
    'handle-callback-err': [2, '^(err|error)$'], // 强制回调错误处理
    indent: 'off', // 缩进风格关闭，交由其他插件处理
    'jsx-quotes': [2, 'prefer-single'], // 强制 JSX 属性值使用单引号
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ], // 对象字面量中冒号的前后空格
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ], // 关键字前后的空格
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ], // 构造函数首字母要大写
  },
}
