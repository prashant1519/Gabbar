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

function z(n) {
  if (n == 0) {
    return;
  }

  z(n - 1);
  console.log(n);
}

let f = z(10);
console.log(f);
