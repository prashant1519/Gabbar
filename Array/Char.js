// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/prashant1519/Gabbar.git
// git push -u origin main

// git remote add origin https://github.com/prashant1519/Gabbar.git
// git branch -M main
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

let arr = "azxxzy";
let s = 0;
let e = arr.length - 1;
let str = "";
function ss(arr, str) {
  while (s < e) {
    if (str[str.length - 1] == arr[s]) {
      str.slice(str.length - 1, arr[s]);
    } else {
      str = arr[s];
    }
    s++;
  }
  return str;
}

let r = ss(arr, str);
console.log(r);
