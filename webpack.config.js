const path = require('path'); //node内置模块
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWbpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "/src/main.js"), // 入口文件
  output: {
    path: path.join(__dirname, "/dist"), //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    port: 8000,
    compress: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWbpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      title: 'index'
    })
  ]
}