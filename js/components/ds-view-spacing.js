var Toggle = require('./ds-toggle')

var viewSpacing = new Toggle();
viewSpacing.init({
  toggleId: 'spacing-toggle-id',
  toggleHolderId: 'spacing-toggle-holder-id',
  holderClassPrefix: 'ds-docs-holder', // 'ds-docs-holder__on' or 'ds-docs-holder__off'
  isOnInit: true,
  useStorage: false
})