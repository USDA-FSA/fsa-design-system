var PageToggle = require('./ds-page-toggle')

var showCode = new PageToggle();
showCode.init({
  key: 'show-code',
  toggleId: 'ds-doc-code-toggle',
  bodyClass: 'ds-show-da-code'
});