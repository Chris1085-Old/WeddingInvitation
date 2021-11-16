"use strict";

$(document).ready(function () {
  var fixTop = document.getElementById('fixTop');
  $(window).scroll(function () {
    var scroll_top = $(this).scrollTop();

    if (scroll_top >= 360) {
      fixTop.classList.remove('fixTop-hidden');
      fixTop.classList.add('fixTop');
    } else {
      fixTop.classList.remove('fixTop');
      fixTop.classList.add('fixTop-hidden');
    }
  });
});
//# sourceMappingURL=all.js.map
