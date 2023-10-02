var stk = [];
var top = -1;
var A = [7, 3, 15, 2];
// console.log(stk.length);
var ans = [];
for (var i = 0; i < A; i++) {
  while (stk.length > 0 && stk.peek() >= A[i]) stk.pop();
  if (stk.length === 0) ans[i] = -1;
  else if (stk.peek() < A[i]) ans[i] = stk.peek();
  stk.push(A[i]);
  top++;
}

function peek() {
  if (top == -1) {
    console.log("UnderFlow");
  } else {
    console.log(stk[top]);
  }
}
console.log(ans);
