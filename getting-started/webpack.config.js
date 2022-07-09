// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path'); // node.js path 라이브러리를 들고 와서 path 변수에 넣는다.

// entry에 파일을 build 하여 ouput 로 보낸다.
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};