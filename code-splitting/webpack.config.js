var path = require('path');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    /* filename: '[chunkhash].bundle.js', */
	filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  /* module: {
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
  }, */
   module: {
    rules: [
      { // 모든 css 파일에 대해 css-loader, style-loader을 돌리겠다.
        test: /\.css$/,
		// css-loader 은 js 파일안에 css 파일이 들어갈수 있게 한다
		// 그리고  style-loader 은 그 css 를 style 로 적용한다. 따라서 순서가 css -> style-laoder 이어야 한다.
		// sass-loader 가 있다면 먼저 적용 되어야 한다.
        use: ['style-loader', 'css-loader', 'sass-loader'] 
      },
	  { // 모든 js 파일에 대해 babel-loader 을 돌리겠다.
		test:/\.js$/,
		use: ['babel-loader']
	  }
    ]
  },
}