const path = require('path')

module.exports = {
  entry: './lib/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle/simple-webstorage.min.js'
  }
}