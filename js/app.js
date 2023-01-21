// Task 1
const message = "Task 1";
alert(message);

function maxNumber(a, b) {
  if (a > b) {
    return (`Это число a: ${a}`);
  }
  if (a < b) {
    return (`Это число a: ${b}`);
  } else {
    return (`Это a = b: ${a} = ${b}`);
  }
}

const a = prompt("first number", "a");
const b = prompt("second number", "b");

alert(maxNumber(a, b));


// Task 2
const message2 = "Task 2";
alert(message2);

function revers(number1) {
  return number1 - number1 * 2;
}

const number1 = prompt("add number", "");

alert(revers(number1));


// //Task 3
const message3 = "Task 3";
alert(message3);

function three(number, count) {
  return number + 3 * count;
}

const number = prompt("enter number", "");
const count = prompt("enter count", "");

alert(three(+number, +count));


// Task 4
const message4 = "Task 4";
alert(message4);

let metric = prompt("Add metric", "m or cm");
let km = prompt("Add km", "0");
numberKm = Number(km);

function kmToM(km) {
  return numberKm * 1000;
}

function kmToCm(km) {
  return numberKm * 1000000;
}

function getMetric() {
  if (metric === "m") {
    return kmToM();
  } else {
    return kmToCm();
  }
}

alert(getMetric(metric, km, kmToM, kmToCm));
