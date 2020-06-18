var PageToggle = require('./ds-page-toggle')

var xray = new PageToggle();
xray.init({
  key: 'x-ray-toggle',
  toggleId: 'ds-doc-xray',
  bodyClass: 'x-ray',
  useStorage: false
})