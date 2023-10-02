var count=0;
var s="abcab"
for(i=0;i<s.length;i++){
    var bag=""
    for(j=i;j<s.length;j++){
        bag=bag+s[j]
        console.log(bag);
    
    if(bag[0]==bag[bag.length-1]){
        count++
    }
 }

}
console.log(count)