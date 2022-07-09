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

- 웹팩실습.
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


## 참조사이트
[웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)
[강의 리포지토리 주소](https://github.com/joshua1988/LearnWebpack)
## License & Copyright

**MIT License** <br>
Copyright © 2020 [Captain Pangyo](https://joshua1988.github.io/)