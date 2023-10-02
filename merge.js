var n1=[1,3,5,7,9]
var n2=[2,4,6,8,10]
var n3=[]
var i=0
var j=0
var k=0
while(i<n1 && j<n2){
    if(n1[i]<n2[j]){
        n3[k]=n1[i]
        i++
        k++
    }
    else{
        n3[k]==n2[j]
        j++
        k++
    }
}
while(i<n1){
    n3[k]=n1[i]
    i++
    k++
}
while(j<n2){
    n3[k++]=n2[j++]
}

console.log(n3);