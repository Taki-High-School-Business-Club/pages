//test
    //let input = "https://www.youtube.com/watch?v=jjBUsyW3utY";
    //let input = "https://youtu.be/jjBUsyW3utY";
    //let input = "https://www.google.com"
    /* let spInput = input.split("/");
    //let ytID;
    if(spInput[2] == "www.youtube.com"){
        console.log("normal");
        const spInput2 = spInput[3].split("=");
        ytID = spInput2[1];
        console.log(ytID)
    }else if(spInput[2] == "youtu.be"){
        console.log("min-url");
        ytID = spInput[3]
        console.log(ytID)
    }else{
        console.log("Not Right URL")
    } */
//bugs
//Global
let result = '';
//function
function reqYt(url){
    let ytCode;
    let ytID;
    try{
        let spInput = url.split("/");
        //let ytID;
        if(spInput[2] == "www.youtube.com"){
            console.log("normal");
            const spInput2 = spInput[3].split("=");
            ytID = spInput2[1];
            ytCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ytID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }else if(spInput[2] == "youtu.be" || spInput[2] == "y2u.be"){
            console.log("min-url");
            ytID = spInput[3];
            ytCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ytID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }else{
            console.log("Not Right URL");
            result += "No YouTube"
            ytCode = "";
        }
        }catch(error){
            alert("YouTubeの例外エラー");
        }
    return ytCode;
}
function reqAct(ac0,ac1,ac2){
    let res_active;
    try {
        if(ac2.length != 0){
            res_active = `<div style="border-radius: 5px; border: 1px dashed #ffb6c1;font-size: 100%; margin:1.0em;" \
            class="yomogi"><div style="padding-left:1em;"><strong><p>活動内容</p></strong>\
            <ul><li><!--活動内容1-->${ac0}</li><li><!--活動内容2-->${ac1}</li><li><!--活動内容3-->${ac2}</li></ul>\
            </div></div>`;
        }else if(ac1.length != 0 ){
            res_active = `<div style="border-radius: 5px; border: 1px dashed #ffb6c1;font-size: 100%; margin:1.0em;" \
            class="yomogi"><div style="padding-left:1em;"><strong><p>活動内容</p></strong>\
            <ul><li><!--活動内容1-->${ac0}</li><li><!--活動内容2-->${ac1}</li></ul>\
            </div></div>`
        }else if(ac0.length != 0){
            res_active = `<div style="border-radius: 5px; border: 1px dashed #ffb6c1;font-size: 100%; margin:1.0em;" \
            class="yomogi"><div style="padding-left:1em;"><strong><p>活動内容</p></strong>\
            <ul><li><!--活動内容1-->${ac0}</li></ul>\
            </div></div>`
        }else{
            res_active = '';
            result += 'No Activity '
        }
      } catch (error) {
        alert('多分活動内容の欄を間違えてるんじゃあないかな？');
        return;
      }
    return res_active;
}
function reqImp(imp0,imp1){
    let res_imp;
    try {
        if(imp1.length != 0 ){
            res_imp = `<fieldset style="border:1px solid #7d7d7d;font-size:100%;padding:20px 20px 0 20px;margin:10px 0;"><legend class="strong">今回の感想</legend>\
            <ul><li><!--感想1-->${imp0}</li><li><!--感想2-->${imp1}</li></ul>`
        }else if(imp0.length != 0){
            res_imp = `<fieldset style="border:1px solid #7d7d7d;font-size:100%;padding:20px 20px 0 20px;margin:10px 0;"><legend class="strong">今回の感想</legend>\
            <ul><li><!--感想1-->${imp0}</li></ul></fieldset>`
        }else{
            res_imp = ''
            result += 'No Impressions \n'
        }
    } catch (error) {
        alert('多分感想の欄を間違えてるんじゃあないかな?');
        return;
    }
    return res_imp;
}
function getTime(){
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth()+1;
    var date = nowDate.getDate();
    var hours = nowDate.getHours();
    var minutes = nowDate.getMinutes();
    var seconds = nowDate.getSeconds();
    var outDate = `<${year}-${month}-${date} ${hours}:${minutes}:${seconds} UTC+9:00>`;
    return outDate;
}
$(document).ready(function(){
    //makehtml
    $(".button button").on("click",function(){
        //初期化
        result="";
        //宣言
        const active = [];
        const impress = [];
        let main;
        let ytUrl;
        //実行時間
        let outTime = getTime();
        //入力
        main = $('#main').val();
        active[0] = $('#active0').val();
        active[1] = $('#active1').val();
        active[2] = $('#active2').val();
        impress[0] = $('#impress0').val();
        impress[1] = $('#impress1').val();
        //本文必須化
        if(main.length == 0){
            alert('本文を入力してね');
            return;
        }
        ytUrl = $('#yt').val();
        //Main Sentence
        let res_main= `<p><!--本文-->${main}</p>`;
        //activeの処理
        let res_active = reqAct(active[0],active[1],active[2]);
        //impressの処理
        let res_imp = reqImp(impress[0],impress[1]);
        //ytの処理
        ytCode =  reqYt(ytUrl);
        //Responseまとめる
        const res = `${res_main}${res_active}${res_imp}<div style="text-align :right;"><p style="font-family: 'Lato', sans-serif;">Taki High School Business Club</p></div>${ytCode}`;
        //Output
        $(".output").text(res);
        //console
        $(".result").append(`<p>${outTime}</p><p class="end">ALL PROCESSES FINISHED<br><span class="no-con">${result}</span></p>`);
    })
    //YouTube-Preview
    $("#yt-bt").on("click", function () {
        const ytUrl = $('#yt').val();
        let ytCode = reqYt(ytUrl)
        $("#yt-pre").html(ytCode);
    });
  });
