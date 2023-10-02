// let arr = [1, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 7];
// let s = 0;
// let e = arr.length - 1;
// let mid = Math.floor((s + e) / 2);
// let str = -1;
// function dd(arr, target) {
//   while (s <= e) {
//     if (arr[mid] == target) {
//       str = mid;
//       s = mid + 1;
//       //   e = mid - 1;
//       //   return mid;
//     } else if (arr[mid] < target) {
//       s = mid + 1;
//     } else {
//       e = mid - 1;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
//   return str;
// }
// var x = dd(arr, 4);
// console.log(x);
function gg(t) {
  let s = 0;
  let e = t;
  let mid = Math.floor((s + e) / 2);
  let str = -1;
  while (s < e) {
    if (mid * mid == t) {
      return mid;
    } else if (mid * mid < t) {
      str = mid;
      s = mid + 1;
    } else {
      e = mid;
    }
    mid = Math.floor((s + e) / 2);
  }
  return str;
}

var r = gg(19);
console.log(r);
