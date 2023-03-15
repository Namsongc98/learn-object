function MyDate(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;

  this.getDay = function () {
    return this.day;
  };
  this.getMonth = function () {
    return this.month;
  };
  this.getYear = function () {
    return this.year;
  };

  this.setDay = function (day) {
    this.day = day;
  };
  this.setMonth = function (month) {
    this.month = month;
  };
  this.setYear = function (year) {
    this.year = year;
  };
}

let date = new MyDate(10, 10, 1991);
date.setDay(115)
let day = date.getDay(); // 2
let month = date.getMonth(); // 2
let year = date.getYear();
console.log(day);
console.log(month);
console.log(year);
console.log(date);
// contructor
