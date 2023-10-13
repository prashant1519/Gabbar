function x(n) {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return 1;
  }

  let r = 2 * x(n - 1);
  return r;
}

let f = x(5);
console.log(f);

let i = x(5);
console.log(f);
