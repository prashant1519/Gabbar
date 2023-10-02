// var vo="aeiou"
// var str="nrpl"
// var count=0

// for(var i=0;i<vo.length;i++){
//     // console.log(vo[i]);
//     for(var j=0;j<str.length;j++){
//         // console.log(str[j]);
//         if(vo[i]==str[j]){
//           count++
//         }
//     }
// }
// if(count>0){
//     console.log(true);
    
//    }
//    else if(count==0){
//     console.log(false);
//    }




//vowl and constant

var alp="abcdefghijklmnopqrstuvwxyz"
var vo="aeiou"

var tim="siddharth"
var vowelcount=0

for(var i=0;i<tim.length;i++){
    for(var j=0;j<vo.length;j++){
        if(tim[i]==vo[j]){
            vowelcount++
        }
       
    }
}
console.log(vowelcount);
console.log((tim.length)-vowelcount)


