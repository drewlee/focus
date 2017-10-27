(function() {
  var style = document.createElement('style'),
      container = document.createElement('div'),
      sheet;

  document.head.appendChild(style);
  sheet = style.sheet;
  sheet.insertRule('*:focus{outline:3px solid cyan!important}');
  sheet.insertRule('html{margin-top:50px}');
  sheet.insertRule('.topper{height:50px;width:100%;position:fixed;z-index:2147483647;top:0;background-color:black;color:white}');

  container.className = 'topper';
  document.body.appendChild(container);

  document.addEventListener('focusout', function(evt) {
    setTimeout(function() {
      container.innerText = document.activeElement;
    }, 100);
  });
})();