const path = require('path');
module.exports = {
  mode:'production',
  entry: path.resolve(__dirname,'src/js/index.js'),
  output: {
    path: __dirname,
    publicPath: __dirname,
    filename: 'script.js'
  }
}