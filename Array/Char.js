// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/prashant1519/Gabbar.git
// git push -u origin main

// git remote add origin https://github.com/prashant1519/Gabbar.git
// git commit -m "first commit"
// git push -u origin main

// palandom

// let str = "madam";
// function r(str) {
//   let s = 0;
//   let e = str.length - 1;
//   let flag = true;
//   while (s <= e) {
//     if (str[s] === str[e]) {
//       s++;
//       e--;
//     } else {
//       return false;
//     }
//   }
//   return flag;
// }

// let f = r(str);
// console.log(f);

// duplicate
// let arr = "madqam";
// let s = 0;
// let e = arr.length - 1;

// for (let i = 0; i < arr.length; i++) {
//   // const element = array[i];
//   arr[2].pop();
// }
// console.log(arr);
// function ss(arr) {
//   while (s <= e) {
//     if (arr[s] === arr[e]) {
//       s++;
//       e--;
//     } else {
//       //   return false;
//       arr[s].pop();
//     }
//   }
//   return true;
// }

// let r = ss(arr);
// console.log(r);

// function palin(arr) {
//   while (s <= e) {
//     if (arr[s] === arr[e]) {
//       s++;
//       e--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// let arr = "azxxzy";
// let s = 0;
// let e = arr.length - 1;
// let str = "";

// function ss(arr, str) {
//   while (s < e) {
//     if (str[str.length - 1] == arr[s]) {
//       str.slice(str[0], str.length - 1);
//     } else {
//       str = arr[s];
//     }
//     s++;
//   }
//   return str;
// }

// let r = ss(arr, str);
// console.log(r);
//

//check palindrom only one removal allowed
// let str = "marewam";
// let s = 0;
// let e = str.length - 1;
// function pa(str, s, e) {
//   while (s < e) {
//     if (str[s] == str[e]) {
//       s++;
//       e--;
//     } else {
//       let ans = check(str, s + 1, e);
//       let ans1 = check(str, s, e - 1);

//       return ans || ans1;
//     }
//   }
//   return true;
// }

// function check(str) {
//   while (s <= e) {
//     if (str[s] != str[e]) {
//       return false;
//     } else {
//       s++;
//       e--;
//     }
//   }
//   return true;
// }

// let r = pa(str);
// console.log(r);

//calulate pan substring

let str = "aaa";
let i = 0;
let j = str.length - 1;

function outer(str, i, j) {
  let count = 0;
  while (i >= 0 && j < str.length && str[i] == str[j]) {
    count++;
    i++;
    j--;
  }
  return count;
}
let w = outer(str, i, j);
console.log(w);

function run(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    let odd = outer(str, i, i);
    let even = outer(str, i, i + 1);
    total = total + odd + even;
  }
  return total;
}

// let r = run(str, i, j);
// console.log(r);
