var Toggle = require('./ds-toggle')

var anatomyAnnotation = new Toggle();

anatomyAnnotation.init({
  toggleId: 'annotation-toggle',
  toggleHolderId: 'annotation-toggle-holder',
  holderClassPrefix: 'ds-docs-holder', // 'ds-docs-holder__on' or 'ds-docs-holder__off'
  isOnInit: true,
  useStorage: false
})