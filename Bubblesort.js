// var arr = [1, 5, 32, 4, 2, 5];

function hello(x, y) {
  let a = x.split("").sort().join();
  let b = y.split("").sort().join();
  //   console.log(a, b);
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
var x = hello("hena", "neha");
console.log(x);
