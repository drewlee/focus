(function() {
  var style = document.createElement('style'),
      sheet;

  document.head.appendChild(style);
  sheet = style.sheet;
  sheet.insertRule('*:focus{outline:3px solid cyan!important}');

  document.addEventListener('focusout', function() {
    console.log(document.activeElement);
  });
})();
