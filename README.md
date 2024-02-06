# 微信小程序启动项目（uni vue-cli）

## vue3 + vite + ts + uview-plus + Eslint + StyleLint + plop自动化

## 安装依赖

```
yarn
npm i
```

##启动项目

```
npm dev
```

###运行成功后使用微信开发工具打开dist/dev/mp-weixin目录

##mixins 混入提供列表/新增/详情公共逻辑

##plop 自动化生成目录

```
npx plop
```

###例如输入文件名称：home, title名：首页

1. 自动生成pages/home 文件下index | add | detail 三个vue文件 和一个公共index.ts 文件
2. 自动生成api/home index.ts 文件
3. 自动生成pages.json对应的路径

### 提供uview-plus 全局默认配置 https://uiadmin.net/uview-plus/components/setting.html

1. 这个配置无效的bug, git上已修复，npm目前未更新 2024/2/5

### 自定义icon https://icomoon.io/

1. 下载到本地解压到static目录下解压
2. 新增图标需把本地icons/fonts中的字体文件导入即可
