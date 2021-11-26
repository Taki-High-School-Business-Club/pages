$(document).ready(function () {
  //コピーするで
  $("#copy-button").on("click", function () {
    let cp = $(".output").text();
    navigator.clipboard.writeText(cp);
    $("#copy-button").text("コピー完了");
  });
});
