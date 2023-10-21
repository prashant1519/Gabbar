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
// let arr = [10, 20, 30, 40, 50];
// function aq(n, size, i) {
//   if (i >= size) {
//     return;
//   }

//   console.log(n[i]);
//   let g = aq(n, size, i + 1);
//   return g;
// }

// let f = aq(arr, 5, 0);
// console.log(f);

//search in array
// let arr = [10, 20, 25, 40, 50];
// function aq(n, size, target, i) {
//   if (i >= size) {
//     return false;
//   }

//   if (n[i] == target) {
//     return true;
//   }

//   let g = aq(n, size, target, i + 1);
//   return g;
// }

// let f = aq(arr, 5, 20, 0);
// console.log(f);

//min in array
// let arr = [42, 12, 10, 23, 21];
// let str = [];
// function aq(n, size, Max, i, str) {
//   if (i >= size) {
//     return;
//   }

//   if (n[i] < Max) {
//     str.push[n[i]];
//   }
//   aq(n, size, Max, i + 1, str);

//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// }

// let f = aq(arr, 5, Infinity, 20, 0, str);
// console.log(f);

//double array

// let arr = [10, 20, 30, 40, 50];
// // let str = [];
// function aq(n, size, i) {
//   if (i >= size) {
//     return;
//   }
//   n[i] = 2 * n[i];
//   console.log(n[i]);
//   aq(n, size, i + 1);
// }

// let f = aq(arr, 5, 0);
// console.log(f);

//sorting
let arr = [10, 20, 30, 45, 50];
function ra(arr, size, i) {
  if (i >= size) {
    return true;
  }

  if (arr[i] > arr[i - 1]) {
    let s = ra(arr, size, i + 1);
    return s;
  } else {
    return false;
  }
}

let d = ra(arr, 5, 1);
// console.log(d);
if (d) {
  console.log("sorted");
} else {
  console.log("not sorted");
}
