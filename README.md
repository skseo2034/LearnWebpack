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

	npm install gulp --global // 전역설치 (시스템 레벨에 사용할 자바라이브러리 설치) 
							//windows 기준 C:\Users\USER\AppData\Roaming\npm\node_modules 에 설치
	```

## 참조사이트
[웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)
[강의 리포지토리 주소](https://github.com/joshua1988/LearnWebpack)
## License & Copyright

**MIT License** <br>
Copyright © 2020 [Captain Pangyo](https://joshua1988.github.io/)