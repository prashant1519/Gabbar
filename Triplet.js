var count = 0;
var k = 33;
// var l = 0;
// var r = arr.length - 1;
// function tri(arr,k)
var arr = [4, 6, 7, 8, 9, 11, 17, 21];
for (var i = 0; i < arr.length - 2; i++) {
  var l = i + 1;
  var r = arr.length - 1;

  while (l < r) {
    if (arr[i] + arr[l] + arr[r] === k) {
      count++;
    } else if (arr[i] + arr[l] + arr[r] < k) {
      l++;
    } else {
      r--;
    }
  }
}

console.log(count);

var x = tri(arr, 33);
console.log(x);
