let arr=[1,4,6,8,9]
let k=2
let sum=0;
let max=-Infinity;

for(var i=0;i<k;i++){
    sum+=arr[i]

    if(sum>max){
        max=sum
    }
}
// console.log(sum);
for(var i=k;i<arr.length;i++){
    sum-=arr[i-k]
    sum+=arr[i]
    
    
    if(sum>max){
        max=sum
    }
}
console.log(sum);

