# npm包yeoman脚手架

## 目的

用yeoman一键生成npm包工程结构。使用rollup构建，jest测试

## 功能

### 生成npm包

支持生成一个纯js的npm包脚手架工具。使用rollup构建，jest测试。

### 本地测试

可以测试这个包是否合理。`npm run test`命令可以生成一个test目录，下面会有一个使用本脚手架
生成的npm包工程，可以在这个包工程中进行实地测试。

`babel.config.json`文件是为了配合jest测试生成的
