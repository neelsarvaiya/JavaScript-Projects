let display = document.querySelector("#display");

let clear = document.querySelector("#clear");
let o1 = document.querySelector("#o1");
let t2 = document.querySelector("#t2");
let t3 = document.querySelector("#t3");
let f4 = document.querySelector("#f4");
let f5 = document.querySelector("#f5");
let s6 = document.querySelector("#s6");
let s7 = document.querySelector("#s7");
let e8 = document.querySelector("#e8");
let n9 = document.querySelector("#n9");
let zero = document.querySelector("#zero");

let pl = document.querySelector("#pl");
let mi = document.querySelector("#mi");
let mu = document.querySelector("#mu");
let di = document.querySelector("#di");
let mod = document.querySelector("#mod");
let dot = document.querySelector("#dot");

let result = document.querySelector("#result");

let currrentDisplay = "";



clear.addEventListener("click", () => {
  currrentDisplay = "";
  display.value = currrentDisplay;
});

o1.addEventListener("click", () => {
  currrentDisplay += "1";
  display.value = currrentDisplay;
});

t2.addEventListener("click", () => {
  currrentDisplay += "2";
  display.value = currrentDisplay;
});

t3.addEventListener("click", () => {
  currrentDisplay += "3";
  display.value = currrentDisplay;
});

f4.addEventListener("click", () => {
  currrentDisplay += "4";
  display.value = currrentDisplay;
});

f5.addEventListener("click", () => {
  currrentDisplay += "5";
  display.value = currrentDisplay;
});

s6.addEventListener("click", () => {
  currrentDisplay += "6";
  display.value = currrentDisplay;
});

s7.addEventListener("click", () => {
  currrentDisplay += "7";
  display.value = currrentDisplay;
});

e8.addEventListener("click", () => {
  currrentDisplay += "8";
  display.value = currrentDisplay;
});

n9.addEventListener("click", () => {
  currrentDisplay += "9";
  display.value = currrentDisplay;
});

zero.addEventListener("click", () => {
  currrentDisplay += "0";
  display.value = currrentDisplay;
});

pl.addEventListener("click", () => {
  currrentDisplay += "+";
  display.value = currrentDisplay;
});

mi.addEventListener("click", () => {
  currrentDisplay += "-";
  display.value = currrentDisplay;
});

mu.addEventListener("click", () => {
  currrentDisplay += "*";
  display.value = currrentDisplay;
});

di.addEventListener("click", () => {
  currrentDisplay += "/";
  display.value = currrentDisplay;
});

mod.addEventListener("click", () => {
  currrentDisplay += "%";
  display.value = currrentDisplay;
});

dot.addEventListener("click", () => {
  currrentDisplay += ".";
  display.value = currrentDisplay;
});

result.addEventListener("click", () => {
  display.value = eval(display.value);
});
