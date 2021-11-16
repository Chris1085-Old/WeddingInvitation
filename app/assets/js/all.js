$(document).ready(() => {
  const fixTop = document.getElementById('fixTop')

  $(window).scroll(function () {
    let scroll_top = $(this).scrollTop()

    if (scroll_top >= 360) {
      fixTop.classList.remove('fixTop-hidden')
      fixTop.classList.add('fixTop')
    } else {
      fixTop.classList.remove('fixTop')
      fixTop.classList.add('fixTop-hidden')
    }
  })
})
