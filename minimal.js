// let target = 7
// // let nums = [2,3,1,2,4,3]
// let arr=[1,2,2,3,3,4]
// let left=0
// let right=arr.length-1
// let sum=0
// let max=Infinity
// while(left<right){
// sum+=arr[left]+arr[right]

// if(sum===target){
//     console.log(arr[left],arr[right]);
//     break;
// }

// else if(sum<target){
//     left++
// } 

// else {
//     right--
// }

// }

// var str="masai"
// var left=0
// var right=str.length-1
// // console.log(str[left],str[right]);

// while(left<right){
//     let temp=str[right]
//     str[right]=str[left]
//     str[left]=temp
//     left++
//     right--
// }

// console.log(str);

var arr="masai"
var left=0;
var right=arr.length-1;


function swap(arr,right,left){
    let temp=arr[right]
    arr[right]=arr[left]
    arr[left]=temp
}

while(left<right){
     swap(arr,left,right)
     left++;
     right--;
}

console.log(arr);
