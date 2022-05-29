//Common_function class化したらめんどそう
function makeTwoFigure(num) {
  if (num < 10) {
    const R = "0" + num;
    return R;
  } else {
    return num;
  }
}
function getTime() {
  let nowDate = new Date();
  let year = nowDate.getFullYear();
  let month = nowDate.getMonth() + 1;
  let date = nowDate.getDate();
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let seconds = nowDate.getSeconds();
  //let utc = new Date(Date.UTC());
  let outDate = `<${year}-${month}-${date} ${hours}:${minutes}:${seconds} UTC+0900>`;
  return outDate;
}
function addBr(sen){
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
//class
class Base {
  counter;
  mode;
  label;
  beforeHtml;
  afterHtml;
  constructor(counter,mode,label,beforeHtml,afterHtml) {
    this.counter = counter;
    this.mode = mode;
    this.label = label;
    this.beforeHtml = beforeHtml;
    this.afterHtml = afterHtml;
  }
  increaseButton() {return;}
  decreaseButton() {return;}
  actAndImpMakeHtml() {
    let formContent = new Array();
    let liText = "";
    let output = "";
    for(let i = 0; i < this.counter; i++){
      const getFormId = document.getElementById(`${this.mode + makeTwoFigure(i+1)}`);
      // * コンソール関連の処理入れたい!!!
      if(getFormId.value == ""){
        formContent[i] = "";
      }else{
        formContent[i] = `<li>${getFormId.value}</li>`;
      }
      liText = liText + formContent[i];
      //console.log(formContent[i]);
    }
    if(liText != ""){
      output = this.beforeHtml + liText + this.afterHtml
    }
    return output;
  }
  increaseForm(){
    let a = document.getElementById(`li-${this.mode + makeTwoFigure(this.counter - 1)}`);
    let nowID = makeTwoFigure(this.counter);
    let htmlCode;
    htmlCode = this.mode == "act" ? `<input type="text" placeholder="活動内容${nowID}" id="act${nowID}">` : `<textarea type="text" placeholder="今回の感想${nowID}" id="imp${nowID}"></textarea>`
    a.insertAdjacentHTML(
      "afterend",
      `<li id="${
        "li-" + this.mode + nowID
      }"><label for="active0">${this.label + nowID}</label><br>${htmlCode}</li>` // <input type="text" placeholder="${this.label + nowID}" id="${this.mode + nowID}">
    );
  }
  decreaseCounterCheck(counter){
    if (counter > 1) {
      counter--;
      console.log("Decrease!!");
    } else if (this.counter == 1) {
      console.log("Not Decrease!!");
    } else if (this.counter < 0) {
      console.log("Exception : c < 0");
    }
    return counter;
  }
  set counter(counter) {
    this.counter = counter; 
  }
  get counter() {
    return this.counter;
  }
}
class Active extends Base {
  increaseButton() {
    this.counter++;
    this.increaseForm();
  }
  decreaseButton() {
    this.counter = this.decreaseCounterCheck(this.counter);
    let a = document.getElementById(`li-act${makeTwoFigure(this.counter + 1)}`);
    a.remove();
  }
}
class Impression extends Base {
  increaseButton() {
    this.counter++;
    this.increaseForm();
  }
  decreaseButton() {
    this.counter = this.decreaseCounterCheck(this.counter);
    let a = document.getElementById(`li-imp${makeTwoFigure(this.counter + 1)}`);
    a.remove();
  }
}
//宣言
const MAIN_SEN = document.getElementById("main")//main_Sentenceのform
const HTML_BUTTON = document.getElementById("make-html");
let activeCounter = 3; //初期値
let impressionCounter = 2; // 初期値
const ACTIVE = new Active(activeCounter,"act","活動内容",'<div style="border-radius: 5px; border: 1px dashed #ffb6c1;font-size: 100%; margin:1.0em;" class="yomogi"><div style="padding-left:1em;"><strong><p>活動内容</p></strong><ul>','</ul></div></div>');
const IMPRESSION = new Impression(impressionCounter,"imp","今回の感想",'<div style="margin: 1em;padding: 0;border: 1px solid #000;border-radius: 1vh;"><p style="padding: 0.5em; font-weight:bold;">今回の感想</p><div class="box-content"><ul>','</ul></div></div>');
const OUTPUT_BOX = document.getElementById("output-box");
const COPY_BUTTON = document.getElementById("copy-button");
//* イベント
window.onload = function () {
  document.getElementById("main").addEventListener("change", function () {
    //console.log("Change action");
    //console.log(this.value);
    //HTML作成ボタンのdisabled切り替え
    if (this.value == false) {
      console.log("it's empty!!!");
      HTML_BUTTON.disabled = true;
    } else {
      HTML_BUTTON.disabled = false;
    }
  });
  //HTML作成
  HTML_BUTTON.onclick = function () {
    const MAIN_HTML = `<p>${addBr(MAIN_SEN.value)}</p>`;
    const ACT_HTML = ACTIVE.actAndImpMakeHtml();
    console.log(ACT_HTML);
    const IMP_HTML = IMPRESSION.actAndImpMakeHtml();
    console.log(IMP_HTML);
    const OUTPUT_HTML = `${MAIN_HTML}${ACT_HTML}${IMP_HTML}<div style="text-align :right;"><p style="font-family: 'Lato', sans-serif;">Taki High School Business Club</p></div>`;
    OUTPUT_BOX.textContent = OUTPUT_HTML;
    document.getElementById("output").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    //CSS:
    // console.log(`Active = ${ACTIVE.counter}`)
    // console.log(`Impression = ${IMPRESSION.counter}`)
  };
  COPY_BUTTON.onclick = function(){
    navigator.clipboard.writeText(OUTPUT_BOX.textContent).then(function(){
      COPY_BUTTON.textContent = "コピー完了"
    },function(){
      alert("コピー失敗したようなんだよなあ...")
    });
  }
  //Active Increase and Decrease;
  document.getElementById("active-increase").onclick = function () {
    ACTIVE.counter = activeCounter;
    ACTIVE.increaseButton();
    activeCounter = ACTIVE.counter;
  };
  document.getElementById("active-decrease").onclick = function () {
    ACTIVE.counter = activeCounter;
    ACTIVE.decreaseButton();
    activeCounter = ACTIVE.counter;
  };
  //Impression Increase and Decrease;
  document.getElementById("impress-increase").onclick = function () {
    IMPRESSION.counter = impressionCounter;
    IMPRESSION.increaseButton();
    impressionCounter = IMPRESSION.counter;
  };
  document.getElementById("impress-decrease").onclick = function () {
    IMPRESSION.counter = impressionCounter;
    IMPRESSION.decreaseButton();
    impressionCounter = IMPRESSION.counter;
  };
};
