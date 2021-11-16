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

  // var carousel = document.querySelector('.carousel')
  // var flkty = new Flickity(carousel, {
  //   imagesLoaded: true,
  //   percentPosition: false
  // })

  // var imgs = carousel.querySelectorAll('.carousel-cell img')
  // // get transform property
  // var docStyle = document.documentElement.style
  // var transformProp = typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform'

  // flkty.on('scroll', function () {
  //   flkty.slides.forEach(function (slide, i) {
  //     var img = imgs[i]
  //     var x = ((slide.target + flkty.x) * -1) / 3
  //     img.style[transformProp] = 'translateX(' + x + 'px)'
  //   })
  // })
})
