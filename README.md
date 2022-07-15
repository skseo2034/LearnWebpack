# 웹팩 시작하기

이 리포지토리는 인프런 웹팩 온라인 강의의 수업 리포지토리입니다.

## 개발 환경 설정

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v12.x 이상)](https://nodejs.org/ko/)

## VSCode 유용한 플러그인 목록

- 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 문법 검사 : ESLint, [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 기타 : [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings) 등

## NPM
- [Node.js 다운로드사이트](https://nodejs.org/ko/) : LTS 버전 다운로드 권장(Long Term Support:장기지원버젼)
- [NPM 공식 사이트](https://www.npmjs.com/)
- Node Package Manager, 자바스크립트 라이브러리를 관리해 주는 도구
- 전세계 Javascript Library 있는 공개 저장소.(ex. jquery, tensorflow, 머신러닝, exporess, iot 등등)
	```
	node -v // node 버전확인
	npm -v // npm 버전확인
	npm init -y  // npm 초기화 package.json 생성
	npm install jquery // npm install jquery --save-prod 와 동일 명령어 임. default --save-prod 생략했음.
					// node_module 에 jquery libary 설치 통상 jquery > dist 하위에 jquery.js 참조하면 됨.
	npm install gulp //잘못설치
	npm uninstall gulp //삭제

	npm install gulp --global // 전역설치 (시스템 레벨에 사용할 자바스크립트 라이브러리 설치) 
							//windows 기준 C:\Users\USER\AppData\Roaming\npm\node_modules 에 설치
	```
## NPM 설치
- 전역 설치
	- 시스템 레벨에서 사용할 Javascript 라이브러리 전역으로 설치
	- `npm install gulp --global` 또는 `npm install gulp --g` 로 설치
	- 설치경로 
		- Windows : C:\Users\USER\AppData\Roaming\npm\node_modules
		- Mac : /usr/local/lib/node_modules
- 지역 설치
	- 설치경로 : 해당 프로젝트의 node_modules 폴더가 생성되고, 그 폴더 아래에 설치 됨.
	- 설치옵션
		- `npm install vue --save-dev` 또는 `npm install vue -D` 또는 `npm i vue -D`
			- package.json 에 devDependencies 에 들어 감.
		- `npm install jquery --save-prod` 또는 `npm i jquery`
			-  package.json 에 dependencies 에 들어 감.
		- dependencies 와 devDependencies 를 구분해서 설치 하는 이유
			- dependencies는 application 의 로직을 구현하는데 연관이 있다.
				- 화면의 로직과 직접적인 연관이 있는 로직, jquery, reace, angular, chart 등
			- devDependencies 는 개발용 보조 라이브러리 들.
				- webpack, js-compression, sass 등 개발을 할때 도움을 주는 개발용 보조 라이브러리
                - build 시 배포 되지 않는다.
	- 개발용 라이브러리(devDependencies) 와 배포용 라이브러리(dependencies) 구분하기
		- npm 공식 사이트(https://www.npmjs.com/) 에 package installtion 을 참조 하면 된다.
			- 예를 들어 express 는 npm install express 이것으로 가이드 되어 있다.
			 	
## 웹팩
- 웹팩이란?
	- 최신 프론트엔드 프레임워크에서 가장 많이 사용되는 모듈번들러(Module Bundler) 이다.
		- 모듈 번들러란?
			웹 애플리케이션을 구성하는 자원(HTML, CSS, Javascript, Image 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미한다.
		- 모듈 번들링이란?
			- 아래 그림과 같이 웹 애플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합 및 압축 해 주는 동작을 모듈 번들링이라고 한다.	
		![alt text][Module Bundler] 

[Module Bundler]: https://joshua1988.github.io/webpack-guide/assets/img/webpack-bundling.e79747a1.png "모듈 번들링 모형도"

- 웹팩실습 1.
	- [따라하기](https://joshua1988.github.io/webpack-guide/getting-started.html)
	- LearnWebpack > getting-started 폴더생성
	- getting-started 에서 통합터미널 오픈
		- npm init -y
			- 이 프로젝트는 이제 npm 을 이용해서 관리 하겠다.
			- 대부분의 웹팩 프로젝트는 같이 npm 이 동반 된다. 따라서 package.json 설정하고, 웹팩 라이브러리들을 설치 해 나간다.
		- npm i webpack webpack-cli -D	
		- npm i lodash
	- index.html 생성
	- src 폴더 생성 > index.js
		- lodash import 코드 추가
	- index.html 수정
	- package.json 에 `"build": "webpack --mode=none"` 추가
	- npm run build 실행
		- dist > main.js 생성 됨 확인.
	- build 시 package.json 에 webpack ---mode=none  을 줬다. 이렇게 할때마다 많은 옵션을 붙여주는 것 보다 webpack 설정파일을 이용하는게 낫다.
	- webpack 설정파일
		- 프로젝트 폴더 밑에 webpack.config.js 를 만든다.
		- node.js 의 모듈문법을 사용한다.
			- 예) `var path  = require('path')`
			- node path 라이브러 살펴보기 
				- 구글 검색 : node path
				- [Node.js Path API 문서](https://nodejs.org/api/path.html)
	- webpack 를 사용하면 실제로 request 의 횟수를 줄일수 있다.
		- 개발자도구에서 확인 가능.	

- 웹팩의 주요 속성
	- [웹팩의 4가지 주요 속성](https://joshua1988.github.io/webpack-guide/concepts/overview.html)
	- [웹팩 Mode](https://webpack.kr/configuration/mode/)
	- mode, entry, output, module, loader, plugin
		- mode : webpack에 내장된 최적화 기능을 사용할 수 있다.
			- production : defult 모드 배포시 이것으로 적용해야 한다.
			- development : 개발시 사용
			- none : 기본 최적화 옵션에서 제외
		- entry : 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
		```
		// 싱글유형
		// webpack.config.js
		entry: './src/index.js'
		
		// 멀티유형
		 entry: {
			home: ['./home.js', './home.scss'],
			account: ['./account.js', './account.scss'],
		}
		```
		- output : 	웹팩을 돌리고 난 결과물의 파일 경로를 의미합니다.
			- default 경로 : ./dist
		```
		output: {
			filename: 'bundle.js'
		}

		// output 속성 옵션 형태
		// webpack.config.js
		var path = require('path');

		module.exports = {
			output: {
				filename: 'bundle.js',
				path: path.resolve(__dirname, './dist')
			}
		}

		// Output 파일 이름 옵션
			// 결과 파일 이름에 entry 속성을 포함하는 옵션
			module.exports = {
				entry: {
					home: ['./home.js', './home.scss'],
					account: ['./account.js', './account.scss'],
				},
				output: {
					filename: '[name].js',
				}
			}
			// 결과 파일 이름에 웹팩 내부적으로 사용하는 모듈 ID를 포함하는 옵션
			module.exports = {
				output: {
					filename: '[id].bundle.js'
				}
			}
			// 매 빌드시 마다 고유 해시 값을 붙이는 옵션
			module.exports = {
				output: {
					filename: '[name].[hash].bundle.js'
				}
			};
			// 웹팩의 각 모듈 내용을 기준으로 생생된 해시 값을 붙이는 옵션
			// 파일이 수정 되었을때 사용자가 cache 를 지우거나 새로고침을 하지 않게 hash값을 붙인다.
			module.exports = {
				output: {
					filename: '[chunkhash].bundle.js'
				}
			};
		```	
		- Loader : 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성.
			- index.js 에 import './base.css' 라는것을 사용했을때, 이 로드가 index.js 에 base.css 를 넣어주는 역학을 한다.
			- 엔트리나 아웃풋 속성과는 다르게 module라는 이름을 사용한다.
			```
			// webpack.config.js
			module.exports = {
				module: {
					rules: []
				}
			}
			```
			- Loader가 필요한 이유
			```
			웹팩으로 애플리케이션을 빌드할 때 만약 아래와 같은 코드가 있다고 해보겠습니다.

			// app.js
			import './common.css';

			console.log('css loaded');
			/* common.css */
			p {
			color: blue;
			}
			// webpack.config.js
			module.exports = {
			entry: './app.js',
			output: {
				filename: 'bundle.js'
			}
			}
			위 파일을 웹팩으로 빌드하게 되면 아래와 같은 에러가 발생합니다.

			CSS 로딩 에러
			ERROR in ./common.css 1:2
			Module parse failed: Unexpected token(1:2)
			You may need an appropriate loader to hanlde ..................

			위 에러 메시지의 의미는 app.js 파일에서 임포트한 common.css 파일을 해석하기 위해 적절한 로더를 추가해달라는 것입니다.
			```
			- CSS Loader 적용하기
				 - 이 때 해당 폴더에 아래의 NPM 명령어로 CSS 로더를 설치하고 웹팩 설정 파일 설정을 바꿔주면 에러를 해결할 수 있습니다.
				 ```
				 npm i css-loader -D

				 // webpack.config.js
				module.exports = {
					entry: './app.js',
					output: {
						filename: 'bundle.js'
					},
					module: {
						rules: [
						{
							test: /\.css$/,
							use: ['css-loader']
						}
						]
					}
				}
				 ```
				-  위의 module 쪽 코드를 보면 rules 배열에 객체 한 쌍을 추가했습니다. 그리고 그 객체에는 2개의 속성이 들어가 있는데 각각 아래와 같은 역할을 합니다.

					- test : 로더를 적용할 파일 유형 (일반적으로 정규 표현식 사용)
					- use : 해당 파일에 적용할 로더의 이름
				정리하자면 위 코드는 해당 프로젝트의 모든 CSS 파일에 대해서 CSS 로더를 적용하겠다는 의미입니다.

				적용 후 빌드하면 정상적으로 실행되는 것을 알 수 있습니다.
			- 자주 사용되는 로더 종류
				- Babel Loader
				- Sass Loader
				- File Loader
				- Vue Loader
				- TS Loader
			- 로더를 여러 개 사용하는 경우에는 아래와 같이 rules 배열에 로더 옵션을 추가해주면 됩니다.	
			```
			module.exports = {
				module: {
					rules: [
					{ test: /\.css$/, use: 'css-loader' },
					{ test: /\.ts$/, use: 'ts-loader' },
					// ...
					]
				}
			}
			```
			- 로더 적용 순서
				- 특정 파일에 대해 여러 개의 로더를 사용하는 경우 로더가 적용되는 순서에 주의해야 합니다. 로더는 기본적으로 오른쪽에서 왼쪽 순으로 적용됩니다.
			```
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				}
				그리고, 위와 같이 배열로 입력하는 대신 아래와 같이 옵션을 포함한 형태로도 입력할 수 있습니다.

				module: {
					rules: [
						{
						test: /\.css$/,
						use: [
							{ loader: 'style-loader' },
							{
							loader: 'css-loader',
							options: { modules: true }
							},
							{ loader: 'sass-loader' }
						]
						}
					]
				}
			```
		- Plugin : 	플러그인(plugin)은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성입니다. 로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다고 보면 됩니다.
		```
		플러그인은 아래와 같이 선언합니다.

		// webpack.config.js
		module.exports = {
			plugins: []
			}
		플러그인의 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있습니다. 예를 들어보겠습니다.

		// webpack.config.js
		var webpack = require('webpack');
		var HtmlWebpackPlugin = require('html-webpack-plugin');

		module.exports = {
			plugins: [
				new HtmlWebpackPlugin(),
				new webpack.ProgressPlugin()
			]
		}
		```	
		- 자주 사용하는 플러그인
			[HtmlWebpackPlugin](https://webpack.kr/plugins/html-webpack-plugin/)
			[ProgressPlugin](https://webpack.kr/plugins/progress-plugin/#root)
			[split-chunks-plugin](https://webpack.kr/plugins/split-chunks-plugin/)
			[clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
			[image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)
			[webpack-bundle-analyzer-plugin](https://github.com/webpack-contrib/webpack-bundle-analyzer)

- 웹팩실습 2.
	- [튜토리얼 문서](https://joshua1988.github.io/webpack-guide/tutorials/code-splitting.html#code-splitting)
	- css-loader 은 js 파일안에 css 파일이 들어갈수 있게 한다. 그리고  style-loader 은 그 css 를 style 로 적용한다. 따라서 순서가 css -> style-laoder 이어야 한다.
		


## 참조사이트
[웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)
[강의 리포지토리 주소](https://github.com/joshua1988/LearnWebpack)
[바벨 공식사이트](https://babeljs.io/)
[Vue.js 개발자를 위한 ES6 입문서](https://joshua1988.github.io/es6-online-book/guide.html)
[ES6 Modules 문법 소개 글](https://joshua1988.github.io/es6-online-book/modules.html)
## License & Copyright

**MIT License** <br>
Copyright © 2020 [Captain Pangyo](https://joshua1988.github.io/)