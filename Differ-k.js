let A= [1, 3, 5, 7, 10]
// console.log(A[i]);
let k= 2
let left=0
let right=A.length-1
let sum=0
while(left<right){
sum+=A[right]-A[left]
// console.log(sum);
if(sum===k){
    console.log(A[right],A[left]);
}

else if(sum>k){
    right-- ;
    // left--
}



else  left++
   

}
