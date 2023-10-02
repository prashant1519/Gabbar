// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let s = 0;
// let e = arr.length - 1;
// let mid = Math.floor((s + e) / 2);
// // let target = 90;

// function gg(arr, target) {
//   while (s < e) {
//     if (arr[mid] === target) {
//       //   console.log(mid);
//       return mid;
//     } else if (arr[mid] < target) {
//       s = mid + 1;
//     } else {
//       e = mid - 1;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
// }

// let r = gg(arr, 30);
// console.log(r);

// let arr = [1, 4, 4, 4, 4, 4, 4, 4, 5];

// function tt(arr, target) {
//   let s = 0;
//   let e = arr.length - 1;
//   let mid = Math.floor((s + e) / 2);
//   let str = -1;
//   while (s < e) {
//     if (arr[mid] == target) {
//       str = mid;
//       //   e = mid - 1;
//       s = mid + 1;
//     } else if (arr[mid] < target) {
//       s = mid + 1;
//     } else {
//       e = mid - 1;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
//   return str;
// }

// let r = tt(arr, 4);
// console.log(r);

// let arr=[2,10,3,4]

// function tt(arr) {
//   let s = 0;
//   let e = arr;
//   let mid = Math.floor((s + e) / 2);
//   let str = -1;
//   while (s <= e) {
//     if (mid * mid == arr) {
//       return mid;
//     } else if (mid * mid < arr) {
//       str = mid;
//       s = mid + 1;
//     } else {
//       e = mid - 1;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
//   return str;
// }

// let x = tt(20);
// console.log(x);

// function vv(arr) {
//   let s = 0;
//   let e = arr.length - 1;
//   let mid = Math.floor((s + e) / 2);

//   while (s < e) {
//     if (arr[mid] < arr[mid + 1]) {
//       s = mid + 1;
//     } else {
//       e = mid;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
//   return s;
// }

// let g = vv([1, 10, 3, 2]);
// console.log(g);

// let arr = [1, 3, 4, 5, 6, 7];

// function dd(arr) {
//   let s = 0;
//   let e = arr.length - 1;
//   let mid = Math.floor((s + e) / 2);
//   let ans = -1;
//   while (s <= e) {
//     let dff = arr[mid] - mid;
//     if (dff == 1) {
//       s = mid + 1;
//     } else {
//       ans = mid;
//       e = mid - 1;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
//   return ans + 1;
// }

// let r = dd(arr);
// console.log(r);

// let arr = [3, 10, 2, 1];

// function ff(arr) {
//   let s = 0;
//   let e = arr.length - 1;
//   let mid = Math.floor((s + e) / 2);
//   let ans = -1;

//   while (s < e) {
//     if (arr[mid] < arr[mid + 1]) {
//       s = mid + 1;
//     } else {
//       e = mid;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
//   return s;
// }

// let r = ff(arr);
// console.log(r);

//povit
// let arr = [12, 13, 16, 2, 3, 4, 6, 7, 8];
// function ff(arr) {
//   let s = 0;
//   let e = arr.length - 1;
//   let mid = Math.floor((s + e) / 2);
//   let ans = -1;

//   while (s <= e) {
//     if (s === e) {
//       return s;
//     } else if (arr[mid] < arr[mid - 1]) {
//       return mid - 1;
//     } else if (arr[mid] > arr[mid + 1]) {
//       return mid;
//     } else if (arr[s] < arr[mid]) {
//       s = mid + 1;
//     } else if (arr[s] > arr[mid]) {
//       e = mid - 1;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
// }

// let r = ff(arr);
// console.log(r);

//divide
// function ff(div, divsor) {
//   let s = 0;
//   let e = div;
//   let mid = Math.floor((s + e) / 2);

//   let ans = -1;

//   while (s <= e) {
//     if (mid * divsor === div) {
//       return mid;
//     } else if (mid * divsor <= div) {
//       ans = mid;
//       s = mid + 1;
//     } else {
//       e = mid - 1;
//     }
//     mid = Math.floor((s + e) / 2);
//   }
//   return ans;
// }

// let f = ff(45, 7);
// console.log(f);

let arr = [20, 10, 30, 50, 40, 70, 60];

function bb(arr, target) {
  let s = 0;
  let e = arr.length - 1;
  let mid = Math.floor((s + e) / 2);
  while (s < e) {
    if (arr[mid] == target) {
      return mid;
    } else if (mid <= arr.length - 1 && arr[mid + 1] == target) {
      return mid + 1;
    } else if (mid > s && arr[mid - 1] == target) {
      return mid - 1;
    } else if (arr[mid] > target) {
      e = mid - 2;
    } else {
      s = mid + 2;
    }
    mid = Math.floor((s + e) / 2);
  }
}

let d = bb(arr, 60);
console.log(d);
