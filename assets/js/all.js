"use strict";

$(document).ready(function () {
  var fixTop = document.getElementById('fixTop');
  $(window).scroll(function () {
    var scroll_top = $(this).scrollTop();

    if (scroll_top >= 360) {
      fixTop.classList.add('fixTop');
    } else {
      fixTop.classList.remove('fixTop');
    }
  });
});
//# sourceMappingURL=all.js.map
