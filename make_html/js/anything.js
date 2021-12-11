//ie function
function isIe() {
  var ua = navigator.userAgent;
  return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
}
if (isIe()) {
  alert('IEには対応していません');
}
$(document).ready(function () {
  //copyright
  var date = new Date();
  var y = date.getFullYear();
  if (y == 2021) {
    $(".copyright").text("2021 coko-go");
  } else {
    $(".copyright").text(`2021-${y} coko-go`);
  }
  
});
//スクロール
window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});