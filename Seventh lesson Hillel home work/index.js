//Exercise1
function fIrstFunction() {
  let num = 0;
  return function (n) {
    num += n;
    return num;
  };
}
let sum = fIrstFunction();
console.log(sum(4)); 
console.log(sum(6)); 
console.log(sum(10)); 
console.log(sum(7)); 



//Exercise2
function FuncTwoNum(c) {
    return function SecondFunc(b){
  return c * b;
    }
}
console.log(FuncTwoNum(5)(2));






//Exercise3
function getNumber() {
  let num;
  for (let i = 0; i < 10; i++) {
    num = prompt("Please input number over 100:");
    if (num === null) {
      console.error("Eror.");
      return;
    }

    num = Number(num);

    if (!isNaN(num) && num > 100) {
      break;
    }
  }

  console.log("Last input number:", num);
}

getNumber();
