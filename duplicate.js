let arr = [1, 1, 2, 2, 2, 3, 3, 4, 4];

let j = [];

for (i = 0; i <= arr.length - 2; i++) {
  if (arr[i] != arr[i + 1]) {
    arr[j] = arr[i];
    j++;
  }
}
arr[j] = arr[arr.length - 1];

for (var i = 0; i <= j; i++) {
  console.log(arr[i]);
}

// let arr=[1,2,3,4,5,6,7]
// let k=3
// let t=k%arr.length
// // console.log(t);

// 7,6,5,4,3,2,1
