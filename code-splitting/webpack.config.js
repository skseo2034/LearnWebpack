var path = require('path');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { // 모든 css 파일에 대해 css-loader, style-loader을 돌리겠다.
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
	  { // 모든 js 파일에 대해 babel-loader 을 돌리겠다.
		test:/\.js$/,
		use: ['babel-loader']
	  }
    ]
  },
}