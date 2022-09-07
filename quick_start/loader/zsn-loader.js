const REG = /<script>([\s\S]+?)<\/script>/

// 把 .zsn 文件转换为 js 代码的 loader
module.exports = function(source) {
    console.log('*** zsn-loader is running ***\n', source)
    const __source = source.match(REG)
    return __source && __source[1] ? __source[1] : source
}


// 判断当前模块是否为主模块，一般直接通过 node 命令运行的为主模块
// 一般用来测试 loader
if(require.main === module) {

}