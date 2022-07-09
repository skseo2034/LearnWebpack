// ES6 문법
import _ from 'lodash';
// ES5 문법
//var _ = require('lodash');
// 위의 2개는 동일하다.

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());