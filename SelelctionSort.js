var arr = [1, 5, 32, 4, 2, 5];
let left = 0;
let right = arr.length - 1;

for (var i = 0; i < arr.length; i++) {
  // if(arr[j+1]<arr[j]){

  // }
  for (var j = 0; j < arr.length - i; j++) {
    if (arr[j + 1] < arr[j]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
