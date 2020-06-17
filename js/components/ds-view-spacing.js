var Toggle = require('./ds-toggle')

var viewSpacing = new Toggle();
viewSpacing.init({
  toggleId: 'spacing-toggle-id',
  toggleHolderId: 'spacing-toggle-holder-id',
  holderClassPrefix: 'ds-docs-holder',
  useStorage: true
})