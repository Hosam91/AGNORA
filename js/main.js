let offsetAbout = $('#about').offset().top
console.log(offsetAbout)
$(window).scroll(function () {
  let wScroll = $(window).scrollTop()

  console.log(wScroll)
  if (wScroll > offsetAbout) {
    $('#navBar').css('backgroundColor', 'rgba(0,0,0,.6)')
    $('#upBtn').fadeIn(500)
    console.log('more')
  } else {
    $('#navBar').css('backgroundColor', '#1A1A1A')
    $('#upBtn').fadeOut(500)
  }
})

$('#upBtn').click(function () {
  $('html,body').animate({ scrollTop: 0 }, 300)
})
