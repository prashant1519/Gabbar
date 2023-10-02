// var arr=[0,0,1,0,1,1,0,1,0]
// while(left<right){

//     while(arr[left] == 0 && left<right) left++

//     while(arr[right] == 1 && left<right) right--

//     if(left<right){
//         arr[left] = 0
//         arr[right] = 1
//         left++
//         right--
//     }
// }
// console.log(arr);



// var arr=[2,3,7,4,5,6,1]
// var left = 0
// var right=arr.length-1
// while(left<right){

// while(arr[left]%2!=0) left++
// while(arr[right]%2==0) right--


// if(left<right){
// arr[left]=arr[right]
// arr[right]=arr[left]
// left++;
// right--;
// }


// }
// console.log(arr);


var arr=[0,0,1,0,1,1,0,1,0]

let l=0
let r=arr.length-1

while(l<r){
    
    while(arr[l]===0)l++;
    while(arr[r]===1)r--;

    if(l<r){
        arr[l]=0
        arr[r]=1
        l++;
        r--
    }

}
console.log(arr);