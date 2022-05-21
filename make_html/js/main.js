//宣言
let mainSen;
mainSen = document.getElementById('main');
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
let actC = 3;
function increaseActiveForm(id){
    var a = document.getElementById("li-act" + makeIDString(id-1));
    var nowID = makeIDString(id)
    a.insertAdjacentHTML('afterend',`<li id="${"li-act" + nowID}"><label for="active0">活動内容${nowID}</label><br><input type="text" placeholder="${"活動報告" + nowID}" id="${ 'active'+nowID}"></li>`);
}
function decreaseActiveForm(id){
    var a = document.getElementById("li-act" + makeIDString(id + 1));
    a.remove();
}
function increaseActiveButton(){
    console.log('Increase!!')
    actC++;
    increaseActiveForm(actC);
    console.log(`actC = ${actC}`);
    console.log("ID="+makeIDString(actC));
}
function decreaseActiveButton(){
    if(actC > 1){
        actC--;
        console.log('Decrease!!');
        decreaseActiveForm(actC);
    }else if(actC == 1){
        console.log('Not Decrease!!');
    }else if(actC < 0){
        console.log('Exception : c < 0');
    }
    console.log(`actC = ${actC}`);
    console.log("ID="+makeIDString(actC));
}
// * Impressionのfunction類
let impC = 2;
function increaseImpressForm(id){
    var a = document.getElementById("li-imp" + makeIDString(id-1));
    var nowID = makeIDString(id)
    a.insertAdjacentHTML('afterend',`<li id="${"li-imp" + nowID}"><label for="impression0">今回の感想${nowID}</label><br><textarea type="text" placeholder="感想を入力してね" id="${'impression'+nowID}"></textarea></li>`);
}
function decreaseImpressForm(id){
    var a = document.getElementById("li-imp" + makeIDString(id + 1));
    a.remove();
}
function increaseImpressButton(){
    console.log('Increase!!')
    impC++;
    increaseImpressForm(impC);
    console.log(`impC = ${impC}`);
    console.log("ID="+makeIDString(impC));
}
function decreaseImpressButton(){
    if(impC > 1){
        impC--;
        console.log('Decrease!!');
        decreaseImpressForm(impC);
    }else if(impC == 1){
        console.log('Not Decrease!!');
    }else if(impC < 0){
        console.log('Exception : c < 0');
    }
    console.log(`impC = ${impC}`);
    console.log("ID="+makeIDString(impC));
}
//イベント
window.onload = function(){
    document.getElementById('make-html').onclick = function(){
        //alert("clicked!");
        mainSen = document.getElementById('main');
        alert(mainSen.value)
    }
    //Active Increase and Decrease;
    document.getElementById('active-increase').onclick = increaseActiveButton;
    document.getElementById('active-decrease').onclick = decreaseActiveButton;
    //Impression Increase and Decrease;
    document.getElementById('impress-increase').onclick = increaseImpressButton;
    document.getElementById('impress-decrease').onclick = decreaseImpressButton;
}
