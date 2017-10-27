(function() {
  var style = document.createElement('style'),
      sheet;

  document.head.appendChild(style);
  sheet = style.sheet;
  sheet.insertRule('*:focus{outline:2px solid cyan!important;}');
})();