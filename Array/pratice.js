// function x(n) {
//   if (n == 0) {
//     return 1;
//   }
//   if (n == 1) {
//     return 1;
//   }

//   let r = 2 * x(n - 1);
//   return r;
// }

// let f = x(5);
// console.log(f);

// let i = x(5);
// console.log(f);

// let arr = [1, 2, 4, 5, 6, 7, 8];
// let arr = [12, 14, 16, 2, 4, 6, 8, 10];

// function u(arr) {
//   let s = 0;
//   let e = arr.length - 1;
//   let mid = Math.floor((s + e) / 2);
//   let str = -1;
//   while (s < e) {
//     //   if (arr[mid] < arr[mid + 1]) {
//     //     s = mid + 1;
//     //     // e = mid - 1;
//     //   } else {
//     //     e = mid;
//     //   }
//     //   mid = Math.floor((s + e) / 2);
//     if (arr[mid] < arr[mid - 1]) {
//       return mid - 1;
//     } else if (arr[mid] > arr[mid + 1]) {
//       return mid + 1;
//     } else if (arr[mid] <= arr.length - 1 && arr[mid] < arr[s]) {
//       e = mid - 2;
//     } else if (arr[mid] > s && arr[mid] >= arr[s]) {
//       s = mid - 2;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
// }

// let f = u(arr);
// console.log(f);

let arr = [20, 10, 30, 50, 40, 70, 60];
function oo(arr, target) {
  let s = 0;
  let e = arr.length - 1;
  let mid = Math.floor((s + e) / 2);
  let str = -1;
  while (s <= e) {
    if (arr[mid] === target) {
      return mid;
    } else if (mid - 1 >= 0 && arr[mid - 1] === target) {
      return mid - 1;
    } else if (mid + 1 <= e && arr[mid + 1] === target) {
      return mid + 1;
    } else if (arr[mid] < target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
    mid = Math.floor((s + e) / 2);
  }
  return str;
}

let d = oo(arr, 60);
console.log(d);
