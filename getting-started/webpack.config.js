// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path'); //path 라고 하는 nodejs library 를 들고와서  path 변수라는 변수에 담는다.

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist') //path 변수에 담긴 path nodejs  library 을 사용하기위해 resolve 를 사용함. 구글 node path 검색하여 확인
    //유효한 파일 path 를 잡아준다. dist/main.js
  }
};