// contructor
function Rectangle( widthInput, hightInput) {
  this.width = widthInput;
  this.hight = hightInput;

  // cac phuong thu get
  this.getWidth = function () {
    return this.width;
  } 

  this.getHight = function () {
    return this.hight;
  }

  // phuong thuc set

  // phuong tinh chu vi
  this.caculateP = function () {
    return (this.width + this.hight) * 2;
  }

  this.caculateS = function () {
    return this.width * this.hight;
  }
}

const rectagnleOne = new Rectangle(10, 50);
const width = rectagnleOne.width;
const dientich = rectagnleOne.caculateS();
console.log(dientich);
const chuvi = rectagnleOne.caculateP();
console.log(chuvi);