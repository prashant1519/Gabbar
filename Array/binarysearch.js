// var arr = [2, 4, 6, 8, 10, 12, 16];

// // var target = 12;

// function binary(arr, target) {
//   var start = 0;
//   var end = arr.length - 1;
//   var mid = (start + end) / 2;
//   // return arr[mid];
//   // return target;

//   while (start <= end) {
//     if (target === arr[mid]) {
//       //   console.log(mid);
//       return mid;
//     } else if (target < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//     mid = (start + end) / 2;
//   }
//   return -1;
// }

// var x = binary([2, 4, 6, 8, 10, 12, 16], 16);
// console.log(x);

// first occuring elememt

// var arr = [1, 2, 3, 4, 4, 4, 4, 5, 8, 9];

// function hello(arr, target) {
//   var start = 0;
//   var end = arr.length - 1;
//   var mid = (start + end) / 2;
//   var str = -1;

//   while (start <= end) {
//     if (arr[mid] == target) {
//       str = mid;
//       end = mid - 1;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//     mid = (start + end) / 2;
//   }
//   return str;
// }
// var x = hello([1, 2, 3, 4, 4, 4, 4, 4, 5, 8, 9], 4);
// console.log(x);

// end

// function goo(arr, target) {
//   var start = 0;
//   var end = arr.length - 1;
//   var mid = Math.floor((start + end) / 2);
//   var str = -1;

//   while (start <= end) {
//     if (arr[mid] == target) {
//       str = mid;
//     }
//   }
// }

// var x = goo([1, 2, 3, 4, 4, 4, 4, 4, 5, 8, 9], 4);
// console.log(x);

// function noo(arr, target) {
//   var start = 0;
//   var end = arr.length - 1;
//   var mid = Math.floor((start + end) / 2);
//   var str = -1;
//   while (start <= end) {
//     if (arr[mid] == target) {
//       str = mid;
//       start = mid + 1;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//     mid = Math.floor((start + end) / 2);
//   }
//   return str;
// }

// var x = noo([1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 5, 6], 4);
// console.log(x);

// var arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

//seaching an element
// let arr = [1, 2, 3, 4, 5];
// function u(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = Math.floor((start + end) / 2);

//   while (start <= end) {
//     if (arr[mid] == target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//     mid = Math.floor((start + end) / 2);
//   }
//   return -1;
// }
// let x = u(arr, 1);
// console.log(x);

//searching first repeating ele index
// let arr = [1, 3, 3, 3, 3, 3, 3, 4, 5, 6];
// function y(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = Math.floor((start + end) / 2);
//   let str = -1;

//   while (start <= end) {
//     if (arr[mid] == target) {
//       str = mid;
//       end = mid - 1;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }

//     mid = Math.floor((start + end) / 2);
//   }
//   return str;
// }
// var c = y(arr, 3);
// console.log(c);

// searching last repeating ele index

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// function u(arr, target) {
//   let n = 4;
//   let m = 4;
//   let start = 0;
//   let end = n * m - 1;
//   let mid = Math.floor((start + end) / 2);
//   // let str = -1;

//   while (start <= end) {
//     let row = Math.floor(mid / m);
//     let col = mid % m;
//     // let ele=
//     if (arr[row][col] == target) {
//       // str = mid;
//       // start = mid + 1;
//       return col;
//     } else if (arr[row][col] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//     mid = Math.floor((start + end) / 2);
//   }
//   return -1;
// }
// var x = u(arr, 3);
// console.log(x);

// let arr = [1, 2, 3, 3, 3, 3, 3, 3, 4, 5, 6];

// function yy(ten) {
//   let s = 0;
//   let e = ten;
//   let mid = Math.floor((s + e) / 2);
//   let str = -1;
//   // return mid;
//   while (s <= e) {
//     if (mid * mid === ten) {
//       return mid;
//     } else if (mid * mid < ten) {
//       str = mid;
//       s = mid + 1;
//     } else {
//       e = mid - 1;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
//   return str;
// }

// var x = yy(10);
// console.log(x);
// var arr = [1, 10, 5, 2];
function tt(arr) {
  let s = 0;
  let e = arr;
  let mid = Math.floor((s + e) / 2);
  let str = -1;

  while (s <= e) {
    if (mid * mid === arr) {
      return mid;
    } else if (mid * mid < arr) {
      str = mid;
      s = mid + 1;
    } else {
      e = mid - 1;
    }
    mid = Math.floor((s + e) / 2);
  }
  return str;
}

let i = tt(20);
console.log(i);
