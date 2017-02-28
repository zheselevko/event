$(document).ready(function() {

var inputs = document.querySelectorAll('.file-input')

for (var i = 0, len = inputs.length; i < len; i++) {
  customInput(inputs[i])
}

function customInput (el) {
  const fileInput = el.querySelector('[type="file"]')
  const label = el.querySelector('[data-js-label]')
  
  fileInput.onchange =
  fileInput.onmouseout = function () {
    if (!fileInput.value) return
    
    var value = fileInput.value.replace(/^.*[\\\/]/, '')
    el.className += ' -chosen'
    label.innerText = value
  }
}
// $('#slider').slick({
//     autoPlay:true,
//     dots: true,
//     arrows: true,
//     vertical: true,
//   }); 


$('#slider').slick({
slidesToShow: 1,
autoplay: true,
  autoplaySpeed: 7500,
slidesToScroll: 1,
arrows: false,
dots: true,
vertical: true
});

});