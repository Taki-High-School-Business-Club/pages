//bugs
//Global
let result = "";
let resMediaType = "";
//function
function AddBr(sen){
  const spIn = sen.split("\n");
  const spIn_len = spIn.length;
  console.log(spIn_len);
  let output = "";
  for (let i = 0; i < spIn_len - 1; ++i) {
    output += spIn[i] + "<br>";
  }
  output += spIn[spIn_len - 1];
  return output;
}
function ReqAct(ac0, ac1, ac2) {
  let res_active;
  try {
    if (ac2.length != 0) {
      res_active = `<div style="border-radius: 5px; border: 1px dashed #ffb6c1;font-size: 100%; margin:1.0em;" \
            class="yomogi"><div style="padding-left:1em;"><strong><p>活動内容</p></strong>\
            <ul><li><!--活動内容1-->${ac0}</li><li><!--活動内容2-->${ac1}</li><li><!--活動内容3-->${ac2}</li></ul>\
            </div></div>`;
    } else if (ac1.length != 0) {
      res_active = `<div style="border-radius: 5px; border: 1px dashed #ffb6c1;font-size: 100%; margin:1.0em;" \
            class="yomogi"><div style="padding-left:1em;"><strong><p>活動内容</p></strong>\
            <ul><li><!--活動内容1-->${ac0}</li><li><!--活動内容2-->${ac1}</li></ul>\
            </div></div>`;
    } else if (ac0.length != 0) {
      res_active = `<div style="border-radius: 5px; border: 1px dashed #ffb6c1;font-size: 100%; margin:1.0em;" \
            class="yomogi"><div style="padding-left:1em;"><strong><p>活動内容</p></strong>\
            <ul><li><!--活動内容1-->${ac0}</li></ul>\
            </div></div>`;
    } else {
      res_active = "";
      result += "No Activity ";
    }
  } catch (error) {
    alert("多分活動内容の欄を間違えてるんじゃあないかな？");
    return;
  }
  return res_active;
}
function ReqImp(imp0, imp1) {
  let res_imp;
  let imp_sen = "";
  imp0 = AddBr(imp0);
  imp1 = AddBr(imp1);
  try {
    if (imp0.length != 0 && imp1.length !=0) {
      imp_sen = `<li><!--感想1-->${imp0}</li><li><!--感想2-->${imp1}</li>`;
    } else if (imp0.length != 0 || imp1.length !=0) {
      let temp_imp;
      let count_imp;
      if(imp0.length > imp1.length){
        count_imp = 1;
        temp_imp = imp0;
      }else{
        count_imp = 2;
        temp_imp = imp1;
      }
      imp_sen = `<li><!--感想${count_imp}-->${temp_imp}</li>`;
    } else {
      result += "No Impressions \n";
    }
    res_imp = `<fieldset style="border:1px solid #7d7d7d;font-size:100%;padding:20px 20px 0 20px;margin:10px 0;"><legend class="strong">今回の感想</legend><ul>${imp_sen}</ul>`;
  } catch (error) {
    alert("多分感想の欄を間違えてるんじゃあないかな?");
    return;
  }
  return res_imp;
}
function GetTime() {
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1;
  var date = nowDate.getDate();
  var hours = nowDate.getHours();
  var minutes = nowDate.getMinutes();
  var seconds = nowDate.getSeconds();
  var outDate = `<${year}-${month}-${date} ${hours}:${minutes}:${seconds} UTC+9:00>`;
  return outDate;
}
function MainSentence(sen) {
  let outSen = AddBr(sen);
  return outSen;
}
function Media(type,url){
  if(type == "yt"){
    mediaCode = ReqYt(url);
  }else if(type == "picture"){
    mediaCode = ReqPic(url);
  }else if(type == "movie"){
    mediaCode = ReqMov(url);
  }else if(type == "music"){
    mediaCode = ReqMusic(url);
  }
  function ReqYt(url) {
    let ytCode;
    let ytID;
    try {
      let spInput = url.split("/");
      //let ytID;
      if (spInput[2] == "www.youtube.com") {
        console.log("normal");
        const spInput2 = spInput[3].split("=");
        ytID = spInput2[1];
        ytCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ytID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        resMediaType = "Youtube";
      } else if (spInput[2] == "youtu.be" || spInput[2] == "y2u.be") {
        console.log("min-url");
        ytID = spInput[3];
        ytCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ytID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        resMediaType = "Youtube";
      } else {
        result += "No Media";
        ytCode = "";
      }
    } catch (error) {
      alert("YouTubeの例外エラー");
    }
    return ytCode;
  }
  function ReqPic(url){
    let picCode;
    if(url.length !=0 ){
      picCode = `<img src="${url}">`;
      resMediaType = "Picture";
    }else{
      result += "No Media";
      picCode = "";
    }
    return picCode;
  }
  function ReqMov(url){
    let movCode;
    if(url.length !=0 ){
      movCode = `<video controls><source src="${url}"></video>`;
      resMediaType = "Movie";
    }else{
      result += "No Media";
      movCode = "";
    }
    return movCode;
  }
  function ReqMusic(url){
    let musicCode;
    if(url.length !=0 ){
      musicCode = `<audio controls src="${url}">Your browser does not support the<code>audio</code> element.</audio>`;
      resMediaType = "Music";
    }else{
      result += "No Media";
      musicCode = "";
    }
    return musicCode;
  }
  return mediaCode;
}
$(document).ready(function () {
  //makehtml
  $(".button button").on("click", function () {
    //初期化
    result = "";
    resMediaType = "";
    //宣言
    const active = [];
    const impress = [];
    let main;
    let mediaUrl;
    let sortMedia;
    //実行時間
    let outTime = GetTime();
    //入力
    main = MainSentence($("#main").val());
    active[0] = $("#active0").val();
    active[1] = $("#active1").val();
    active[2] = $("#active2").val();
    impress[0] = $("#impress0").val();
    impress[1] = $("#impress1").val();
    sortMedia = $("#chooseMedia").val();
    mediaUrl = $("#media").val();
    //本文必須化
    if (main.length == 0) {
      alert("本文を入力してね");
      return;
    }
    //Main Sentenceの処理
    let res_main = `<p><!--本文-->${main}</p>`;
    //activeの処理
    let res_active = ReqAct(active[0], active[1], active[2]);
    //impressの処理
    let res_imp = ReqImp(impress[0], impress[1]);
    //mediaの処理
    let res_media = Media(sortMedia,mediaUrl);
    //Responseまとめる
    const res = `${res_main}${res_active}${res_imp}<div style="text-align :right;"><p style="font-family: 'Lato', sans-serif;">Taki High School Business Club</p></div>${res_media}`;
    //Output
    $(".output").text(res);
    //console
    $(".result").append(
      `<p>${outTime}</p><p class="end">ALL PROCESSES FINISHED<br><span class="no-con">${result}</span><br><span class="show-type">Media Type:${resMediaType}</span></p>`
    );
  });
  //Media-Preview
  $("#media-pre-bt").on("click", function () {
    let sortMedia = $("#chooseMedia").val();
    window.console.log(sortMedia);
    const ytUrl = $("#media").val();
    let mediaCode = Media(sortMedia,ytUrl);
    $("#media-pre").html(mediaCode);
  });
});
