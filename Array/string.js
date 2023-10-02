// let arr = "dad";
// let left = 0;
// let right = arr.length - 1;
// function g(arr, x, y) {
//   let str = false;
//   while (x < y) {
//     // swap(arr, x, y);
//     // x++;
//     // y--;
//     if (arr[x] == arr[y]) {
//       str = true;
//       x++;
//       y--;
//     } else {
//       return false;
//     }
//   }
//   return str;
// }

// function swap(arr, left, right) {
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
// }

// let x = g(arr, left, right);
// console.log(x);
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     str[i] = "@";
//   }
//   //   console.log(str[2]);
// }
// console.log(str);

// let arr1 = [1, 2, 3, 4, 3, 2, 1];
// let l = 0;
// let r = arr1.length - 1;

// function u(arr1) {
//   var str = -1;
//   while (l <= r) {
//     if (arr1[l] == arr1[r]) {
//       l++;
//       r--;
//     } else {
//       // console.log(arr1[l]);
//       // c.push(arr1[l]);
//       return arr1[r];
//     }
//   }
//   return str;
// }

// let x = u(arr1);
// console.log(x);

// let arr = [1, 0, 0, 0, 1, 0, 1];

// function b(arr) {
//   let l = 0;
//   let r = arr.length - 1;
//   while (l <= r) {
//     if (arr[l] < arr[r]) {
//       l++;
//       r--;
//     } else if (arr[l] > arr[r]) {
//       let temp = arr[l];
//       arr[l] = arr[r];
//       arr[r] = temp;
//       l++;
//       r--;
//     } else {
//       r--;
//     }
//   }
//   return arr;
// }

// function swap(arr, l, r) {
//   let temp = arr[l];
//   arr[l] = arr[r];
//   arr[r] = temp;
// }

// let z = b(arr);
// console.log(z);

// let k = 11;
// let arr = [1, 3, 4, 5, 6, 7];
// let l = 0;
// let r = arr.length - 1;

// while (l < r) {
//   let sum = -1;
//   if (arr[l] + arr[r] == k) {
//     // console.log(arr[l], arr[r]);
//     sum = (arr[l], arr[r]);
//     return sum;
//   } else if (arr[l] + arr[r] < k) {
//     l++;
//   } else {
//     r--;
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [2, 3, 4, 7];
// let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let k = 23;
// let arr = [0, 1, 0, 1, 0, 0, 1];
// let zero = 0;
// let one = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     zero++;
//   } else {
//     one++;
//   }
// }
// console.log(zero, one);

// let arr = [
//   [1, 2, 3],
//   [5, 6, 7],
//   [9, 10, 11],
// ];

// for (let i = 0; i < arr.length; i++) {
// for (let j = 0; j <= arr.length; j++) {

//   if(arr[i][j])
// }

// }
// let k = 11;
// let r = 3;
// let c = 4;

// let s = 0;
// let e = r * c - 1;
// let m = Math.floor((s + e) / 2);
// while (s < e) {
//   let row = Math.floor(m / c);
//   let col = m % c;
//   if (arr[row][col] == k) {
//     return row;
//   } else if (arr[row][col] < k) {
//     s = m + 1;
//   } else {
//     e = m - 1;
//   }
//   let m = Math.floor((s + e) / 2);
// }

// for (let i = 0; i <= arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr.length; j++) {
//     //   if (arr[i][j] < max) {
//     //     max = arr[i][j];
//     //   }
//     sum = sum + arr[j][i];
//   }
//   console.log(sum);
// }

// let arr = [32, -11, 43, -12, -63, 22, 0, -21];
// let left = 0;
// let right = arr.length - 1;
// while (left < right) {
//   if (arr[left] && arr[right] >= 0) {
//     right--;
//   } else if (arr[left] > arr[right]) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     // right--;
//   } else if (arr[left] && arr[right] < 0) {
//     left--;
//   }
// }
// console.log(arr);

// if (arr[right] > 0) {
//   right--;
// } else if (arr[right] < 0) {
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
//   left++;
//   right--;
// } else {
//   left++;
// }

// sort

// let arr = [2, 0, 2, 1, 1, 0];
// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//   if (arr[left] == arr[right]) {
//     right--;
//   } else if (arr[left] > arr[right]) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   } else {
//     left++;
//   }
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = 7;
// let k = 4;
// let t = Math.floor(n % k);
// // console.log(t);
// let l = 0;
// let r = arr.length - 1;

// // while (l < r) {}

// function rotate(arr, l, t, n) {
//   reverse(arr, l, t);
// }
// var x = rotate(arr, l, t, n);
// console.log(x);

// function reverse(arr, l, r) {
//   while (l < r) {
//     swap(arr, l, r);
//     l++;
//     r--;
//   }
//   return arr;
// }
// // console.log(arr);

// function swap(arr, l, r) {
//   let temp = arr[l];
//   arr[l] = arr[r];
//   arr[r] = temp;
// }
// var x = reverse(arr, l, r);
// console.log(x);

// missing
// let arr = [1, 7, 3, 5, 2, 6, 8];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] != i + 1) {
//     console.log(i + 1);
//     break;
//   }
// }

// rearrange
// even,odd order
let arr = [2, -3, -4, -2, 1, 9, -7];
let l = 0;
let r = arr.length - 1;
while (l < r) {
  if (arr[l] > 0 && l % 2 == 0) {
    l++;
  }
  if (arr[r] < 0 && r % 2 == 0) {
    r--;
  }
}

// let arr = [
//   [0, 0, 0, 1],
//   [0, 1, 1, 1],
//   [1, 1, 1, 1],
//   [0, 1, 1, 0],
// ];

// for (let i = 0; i < arr.length; i++) {
//   var sum = 0;
//   var max = -Infinity;
//   for (let j = 0; j <= arr.length; j++) {
//     if (arr[i][j] == 1) {
//       sum++;
//       if (sum < max) {
//         max = sum;
//       }
//     }
//   }
// }
// console.log(sum);

// function d(a) {
//   for (let i = 0; i < a.length; i++) {
//     var sum = 0;
//     var max = -Infinity;
//     for (let j = 0; j <= a.length; j++) {
//       if (a[i][j] == 1) {
//         sum++;
//         if (sum > max) {
//           max = sum;
//         }
//       }
//     }
//   }
//   return max;
// }
// var x = d(arr);
// console.log(x);
// d(arr);
