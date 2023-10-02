var char="/<|<//"
var bag=""
for(var i=0;i<char.length;i++){
    if(char[i]=="/"){
        bag+=3
    }
    else if(char[i]=="<"){
        bag+=2
    }

    else if(char[i]=="|"){
        bag+=1
    }
}
console.log(bag);
