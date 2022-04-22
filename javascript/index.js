const bagLemons = 5;
const bagSugar = 4;
const bagCups = 20;
const Lemonade = 2;

let myLemons = 0,
    mySugar = 0,
    myCups = 0,
    myLemonade = 0,
    myMoney = 20;

console.log(myMoney);

// localStorage.setItem("time", 0);

// console.log(localStorage.getItem("time"));

// var sec = 0;
// tmpSec = localStorage.getItem('secs')
// if (tmpSec != null) {
//     sec = parseInt(tmpSec,0);
// }
// console.log(tmpSec)
// function pad(val) { return val > 9 ? val : "0" + val; }
// setInterval(function () {
//     ++sec
//     localStorage.setItem('secs', sec)
//     console.log(pad(sec % 60));
// }, 1000);
// console.log()











setInterval(displayHello(), 1000);

function displayHello() {
  document.getElementById("seconds").innerHTML += "Hello";
}
