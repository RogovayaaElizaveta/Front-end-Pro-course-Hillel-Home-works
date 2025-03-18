//Exercise1
let inputString = prompt("Введіть рядок:");
let symbolsToRemove = prompt("Введіть символи для видалення ").split(" ");

function symbolfunction(inputString, symbolsToRemove) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    if (symbolsToRemove.indexOf(inputString[i]) === -1) {
      result += inputString[i];
    }
  }
  return result;
}

console.log(symbolfunction(inputString, symbolsToRemove));

//Exercise2

let Array = [1, 4, "hello", 6, 7, "l", true, undefined, null, 9, 11, 12];
let sum = 0;
count = 0;
function middle(Array) {
  for (i = 0; Array.length; i++) {
    if (Array[i] === Number) {
      sum += Array[i];
      count++;
      result = count > 0 ? sum / count : 0;
    }
  }
}
console.log(middle);

//Exercise3
let array = [2, 4, 6, 7, 8, 4, 43, 3];
let RemoveItems = prompt("Введіть елемент для видалення:");

function removeElement(array, item) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === parseInt(item)) {
      array.splice(i, 1);
      i--;
    }
  }
}

removeElement(array, RemoveItems);
console.log(array);
