// vue.cli创建出来的项目配置文件，可以对整个项目的打包和构建进行全局性的配置
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const themePath = path.join(__dirname, './src/theme.less')
module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。

        modifyVars: {
          // 直接覆盖变量

          // 'nav-bar-background-color': 'red'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`
        }

      }
    }
  }
}
