const path    = require('path')
const webpack = require('webpack')

module.exports = [
  {
    entry: {
      example: 'example',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    resolve: {
      extensions: [
        '.js',
        '.vue',
      ],
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: [
            { loader: 'vue-loader',
              options: {
              } },
          ]
        },
      ]
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifests/vendor-angular.json'),
      }),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifests/vendor-vue.json'),
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    }
  }
]
