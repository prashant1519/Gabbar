// function pan(x,y){

// let bag1=""
// let bag2=""

// for(var i=0;i<x;i++){
//     bag1+=x[i]
//     console.log(bag1);
// }

// for(var i=y;i>0;i--){
//     bag2+=y[i]
//     console.log(bag2);
// }




// }
// pan("madam","madam")


let str1="madam"
let str2="madamm"
let bag=""
let bag1=""
for(var i=0;i<str1.length;i++){
bag+=str1[i]

}

for(var j=str2.length-1;j>=0;j--){
    bag1+=str2[j]
    
    }
    // console.log(bag1);

  if(bag == bag1){
        console.log("yes");
    }
    else{
        console.log("no");
    }