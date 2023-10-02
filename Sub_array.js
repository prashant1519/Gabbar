var arr=[1,4,20,3,10,5]

wsum=0;
sum=33
high=0
count=0
for(var i=0;i<arr.length;i++){


    while(wsum<sum && high<arr.length){
        wsum=wsum+arr[high]
        high++
    }
    if(wsum===sum){
        // console.log(true);
        count++
    }
    else if(wsum>sum){
        wsum=wsum-arr[i]
    }
    
}
// console.log(count);
if(count>0){
    console.log(true);
}
else{
    console.log(false);
}