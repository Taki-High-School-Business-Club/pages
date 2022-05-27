//Common_function
function makeTwoFigure(num) {
  if (num < 10) {
    const R = "0" + num;
    return R;
  } else {
    return num;
  }
}
//class
class Base {
  counter;
  constructor(counter) {
    this.counter = counter;
  }
  increaseButton() {
    console.log("Increase!!");
    console.log("IDact=" + makeTwoFigure(activeCounter));
    console.log("IDimp=" + makeTwoFigure(impressionCounter));
    this.counter++;
  }
  decreaseButton() {
    console.log("decrease!!");
    console.log("IDact=" + makeTwoFigure(activeCounter));
    console.log("IDimp=" + makeTwoFigure(impressionCounter));
    if (this.counter > 1) {
      this.counter--;
      console.log("Decrease!!");
    } else if (this.counter == 1) {
      console.log("Not Decrease!!");
      return;
    } else if (this.counter < 0) {
      console.log("Exception : c < 0");
      return;
    }
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
    super.increaseButton();
    let a = document.getElementById(`li-act${makeTwoFigure(this.counter - 1)}`);
    let nowID = makeTwoFigure(this.counter);
    a.insertAdjacentHTML(
      "afterend",
      `<li id="${
        "li-act" + nowID
      }"><label for="active0">活動内容${nowID}</label><br><input type="text" placeholder="活動内容${nowID}" id="act${nowID}"></li>`
    );
  }
  decreaseButton() {
    super.decreaseButton();
    let a = document.getElementById(`li-act${makeTwoFigure(this.counter + 1)}`);
    a.remove();
  }
}
class Impression extends Base {
  increaseButton() {
    super.increaseButton();
    let a = document.getElementById(`li-imp${makeTwoFigure(this.counter - 1)}`);
    let nowID = makeTwoFigure(this.counter);
    a.insertAdjacentHTML(
      "afterend",
      `<li id="${
        "li-imp" + nowID
      }"><label for="active0">今回の感想${nowID}</label><br><textarea type="text" placeholder="今回の感想${nowID}" id="imp${nowID}"></textarea></li>`
    );
  }
  decreaseButton() {
    super.decreaseButton();
    let a = document.getElementById(`li-imp${makeTwoFigure(this.counter + 1)}`);
    a.remove();
  }
}
//宣言
const MAIN_SEN = document.getElementById("main");
const HTML_BUTTON = document.getElementById("make-html");
let activeCounter = 3; //初期値
let impressionCounter = 2; // 初期値
const ACTIVE = new Active(activeCounter);
const IMPRESSION = new Impression(impressionCounter);
//* イベント
window.onload = function () {
  document.getElementById("main").addEventListener("change", function () {
    console.log("Change action");
    console.log(this.value);
    //HTML作成ボタンのdisabled切り替え
    if (this.value == false) {
      console.log("it's empty!!!");
      HTML_BUTTON.disabled = true;
    } else {
      HTML_BUTTON.disabled = false;
    }
  });
  HTML_BUTTON.onclick = function () {
    //alert("clicked!");
    //mainSen = document.getElementById('main');
    //alert(mainSen.value)
  };
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
