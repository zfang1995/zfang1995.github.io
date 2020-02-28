// import './swiper.min.js'

window.onload = function () {
  // 在其他的网页元素加载完成之后初始化swiper
  console.log('what')
  document.querySelector('html').classList.add('swiper-container')
  document.querySelector('body').classList.add('swiper-wrapper')
  document.querySelectorAll('body>section').forEach((element, index) => {
    element.classList.add('swiper-slide')
  })
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    threshold: 300
  })
}

