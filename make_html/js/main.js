//宣言
let mainSen;
mainSen = document.getElementById('main');
let makeHtmlButton = document.getElementById('make-html');
//Common_function
function makeIDString(num){
    if(num < 10){
        const R = '0' + num;
        return R;
    }else{
        return num;
    }
}
// * Active用のfunction類
let actC = 3; //初期値
function increaseActiveButton(){
    console.log('Increase!!')
    actC++;
    increaseForm(actC,"act");
    console.log(`actC = ${actC}`);
    console.log("ID="+makeIDString(actC));
}
function decreaseActiveButton(){
    if(actC > 1){
        actC--;
        console.log('Decrease!!');
        decreaseForm(actC,"act");
    }else if(actC == 1){
        console.log('Not Decrease!!');
    }else if(actC < 0){
        console.log('Exception : c < 0');
    }
    console.log(`actC = ${actC}`);
    console.log("ID="+makeIDString(actC));
}
// * Impressionのfunction類　
let impC = 2; // 初期値
function increaseImpressButton(){
    console.log('Increase!!')
    impC++;
    increaseForm(impC,"imp");
    console.log(`impC = ${impC}`);
    console.log("ID="+makeIDString(impC));
}
function decreaseImpressButton(){
    if(impC > 1){
        impC--;
        console.log('Decrease!!');
        decreaseForm(impC,"imp");
    }else if(impC == 1){
        console.log('Not Decrease!!');
    }else if(impC < 0){
        console.log('Exception : c < 0');
    }
    console.log(`impC = ${impC}`);
    console.log("ID="+makeIDString(impC));
}

// * Form 変更
function increaseForm(id,mode){
    //mode: Active = act , Impress = imp;
    let a = document.getElementById(`li-${mode + makeIDString(id - 1)}`);
    let nowID = makeIDString(id);
    let label = mode == "act" ? "活動内容" : "今回の感想";
    let htmlCode = mode == "act" ? `<input type="text" placeholder="${label + nowID}" id="${ mode + nowID}">` : `<textarea type="text" placeholder="${label + nowID}" id="${ mode + nowID}"></textarea>`;
    a.insertAdjacentHTML('afterend',`<li id="${"li-"+ mode + nowID}"><label for="active0">${label + nowID}</label><br>${htmlCode}</li>`);
}
function decreaseForm(id,mode){
    //mode: Active = act , Impress = imp;
    let a = document.getElementById(`li-${mode + makeIDString(id + 1)}`);
    a.remove();
}
function increaseActiveForm(id){
    var a = document.getElementById("li-act" + makeIDString(id-1));
    var nowID = makeIDString(id)
    a.insertAdjacentHTML('afterend',`<li id="${"li-act" + nowID}"><label for="active0">活動内容${nowID}</label><br><input type="text" placeholder="${"活動報告" + nowID}" id="${ 'active'+nowID}"></li>`);
}
function decreaseActiveForm(id){
    var a = document.getElementById("li-act" + makeIDString(id + 1));
    a.remove();
}
function increaseImpressForm(id){
    var a = document.getElementById("li-imp" + makeIDString(id-1));
    var nowID = makeIDString(id)
    a.insertAdjacentHTML('afterend',`<li id="${"li-imp" + nowID}"><label for="impression0">今回の感想${nowID}</label><br><textarea type="text" placeholder="感想を入力してね" id="${'impression'+nowID}"></textarea></li>`);
}
function decreaseImpressForm(id){
    var a = document.getElementById("li-imp" + makeIDString(id + 1));
    a.remove();
}

//イベント
window.onload = function(){
    document.getElementById('main').addEventListener("change",function(){
        console.log("Change action");
        console.log(this.value);
        if(this.value == false){
            console.log("it's empty!!!");
            makeHtmlButton.disabled = true;
        }else{
            makeHtmlButton.disabled = false;
        }
      });
    makeHtmlButton.onclick = function(){
        //alert("clicked!");
        //mainSen = document.getElementById('main');
        //alert(mainSen.value)
    }
    //Active Increase and Decrease;
    document.getElementById('active-increase').onclick = increaseActiveButton;
    document.getElementById('active-decrease').onclick = decreaseActiveButton;
    //Impression Increase and Decrease;
    document.getElementById('impress-increase').onclick = increaseImpressButton;
    document.getElementById('impress-decrease').onclick = decreaseImpressButton;
}
