const path = require('path')

module.exports = {
  entry: ['./src/index.js'],
  mode: 'production',
  output: {
    path: path.join(__dirname, 'lib', 'bundle'),
    filename: 'simple-webstorage.min.js',
  },
  optimization: {
    splitChunks: {
      chunks:'all'
    }
  }
}