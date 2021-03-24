const path = require("path");

module.exports = {
  devServer: {
    host: "0.0.0.0",
    disableHostCheck: true
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://github-20735959.gitee.io/genealogy-client/"
      : "./",
  outputDir: "dist", // 输出文件目录
  lintOnSave: false,
  configureWebpack: config => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
          "@": path.resolve(__dirname, "./src"),
          "@c": path.resolve(__dirname, "./src/components"),
          "@p": path.resolve(__dirname, "./src/pages")
        } // 别名配置
      }
    });
  },
  productionSourceMap: false // 生产环境是否生成 sourceMap 文件
};
