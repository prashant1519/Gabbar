// let n = 7;
// function x(n) {
//   if (n == 0) {
//     return 1;
//   }

//   if (n == 1) {
//     return 1;
//   }

//   let z = n * x(n - 1);
//   return z;
// }

// let r = x(5);
// console.log(r);

// print from 1 to n

// function z(n) {
//   if (n == 0) {
//     return;
//   }

//   z(n - 1);
//   console.log(n);
// }

// let f = z(10);
// console.log(f);

//exponential

// function z(n) {
//   if (n == 0) {
//     return 1;
//   }

//   let d = 2 * z(n - 1);
//   return d;
// }

// let f = z(10);
// console.log(f);

// fibbonici

// function c(n) {
//   if (n === 0) {
//     return 0;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   let r = c(n - 1) + c(n - 2);
//   return r;
// }

// let d = c(7);
// console.log(d);

// function z(n) {
//   if (n == 0) {
//     return 0;
//   }

//   let r = n + z(n - 1);
//   return r;
// }

// let f = z(5);
// console.log(f);

// let arr = [10, 20, 30, 40, 50];
// function sd(arr, i, length) {
//   if (i >= length) {
//     return;
//   }

//   console.log(arr[i]);

//   let r = sd(arr, i + 1, length);
//   return r;
// }

// let cx = sd(arr, 0, 5);
// console.log(cx);

// climbing ladder
// function aq(n) {
//   if (n == 1) {
//     return 1;
//   }

//   if (n == 2) {
//     return 2;
//   }

//   let d = aq(n - 1) + aq(n - 2);
//   return d;
// }

// let f = aq(5);
// console.log(f);

//printing array
let arr = [10, 20, 30, 40, 50];
function aq(n, size, i) {
  if (i >= size) {
    return;
  }

  console.log(n[i]);
  let g = aq(n, size, i + 1);
  return g;
}

let f = aq(arr, 5, 0);
console.log(f);
