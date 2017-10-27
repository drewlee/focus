(function() {
  'use strict';

  var style = document.createElement('style'),
      sheet;

  document.head.appendChild(style);
  sheet = style.sheet;
  sheet.insertRule('*:focus{outline:1px solid cyan!important;}');
})();