$(document).ready(function () {
  //コピーするで
  $("#copy-button").on("click", function () {
    let cp = $(".output").text();
    navigator.clipboard.writeText(cp).then(function(){
      $("#copy-button").text("コピー完了");
    },function(){
      alert("コピー失敗したようなんだよなあ...")
    });
  });
});
