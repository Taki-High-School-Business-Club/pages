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
  let date = new Date();
  let y = date.getFullYear();
  let startY = 2021;
  let name = "Taki-High-School-Business-Club";
  if (y == 2021) {
    $(".copyright").text(`${startY} ${name}`);
  } else {
    $(".copyright").text(`${startY}-${y} ${name}`);
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