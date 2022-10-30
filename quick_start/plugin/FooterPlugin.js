const { ConcatSource } = require('webpack-sources')

/**
 * 自定义在文件末尾添加注释的插件
 */
class FooterPlugin {
    constructor(options) { // 自己传入的 options
        this.options = options // 将参数绑定到 this
    }

    apply(compiler) {
        compiler.hooks.compilation.tap('FooterPlugin', compilation => { // compilation: 编译(compilation)创建之后，执行插件
            compilation.hooks.processAssets.tap('FooterPlugin', () => { // processAssets: 对要输出的资源进行再处理
                for (const chunks of compilation.chunks) {
                    for (const file of chunks.files) {
                        const comment = `/*${this.options.banner}*/`
                        // compilation.updateAsset: 更新资源，注意，非 hooks 的周期方法, https://webpack.js.org/api/compilation-object/#updateasset
                        compilation.updateAsset(file, old => new ConcatSource(old, '\n', comment)) // 调用 ConcatSource 将注释拼接到源文件末尾
                    }
                }
            })
        })
    }
}c

module.exports = FooterPlugin