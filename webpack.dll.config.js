const path    = require('path')
const webpack = require('webpack')

module.exports = [
  {
    entry: {
      'vendor-vue': [
        'vue',
      ],
      'vendor-angular': [
        'angular',
        'angular-ui-router',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].dll.js',
      library: 'lib_[chunkhash]',
    },
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules',
      ],
      alias: {
        vue$: path.join(__dirname, '/node_modules/vue/dist/vue.js')
      }
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(__dirname, 'manifests/[name].json'),
        name: 'lib_[chunkhash]',
      })
    ],
  },
]
