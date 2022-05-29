class Base {
    counter;
    mode;
    label;
    constructor(counter) {
      this.counter = counter;
    }
    increaseButton() {}
    decreaseButton() {}
    increaseForm(){
      let a = document.getElementById(`li-${this.mode + makeTwoFigure(this.counter - 1)}`);
      let nowID = makeTwoFigure(this.counter);
      let htmlCode;
      htmlCode = this.mode == "act" ? `<input type="text" placeholder="活動内容${nowID}" id="act${nowID}">` 
        : `<textarea type="text" placeholder="今回の感想${nowID}" id="imp${nowID}"></textarea>`
      a.insertAdjacentHTML(
        "afterend",
        `<li id="${"li-" + this.mode + nowID}"><label for="active0">${this.label + nowID}</label><br>${htmlCode}</li>`
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
    label="活動内容";
    mode = "act";
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
    label="今回の感想";
    mode = "imp";
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