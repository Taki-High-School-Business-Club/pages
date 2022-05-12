//宣言
let mainSen;
mainSen = document.getElementById('main');
//イベント
window.onload = function(){
    document.getElementById('make-html').onclick = function(){
        //alert("clicked!");
        mainSen = document.getElementById('main');
        alert(mainSen.value)
    }
}