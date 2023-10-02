var stk=[]
var top=-1
var max=5

function push(data){
    if(isFull()==true){
        console.log("overflow");
    }
    else{
        top++
        stk[top]=data
    }
}

function isFull(){
    if(top===max-1){
        return true
    }
    else{
        return false
    }
}


function pop(){
    if(top===-1){
        console.log("underflow");
    }
    else{
        console.log(stk[top]);
        top--
    }

}

push(12)
push(13)
push(22)
push(11)
push(62)
// push(66)
pop()
pop()
pop()



// let arr=[]
// let max=5
// let top=-1

// function stack(data){
//     if(top===max-1){
//         console.log("over flow");
//     }
//     else{
//         top++
//         arr[top]=data
//     }
// }

// function pop(){
//     if(top===-1){
//         console.log("under flow");
//     }
//     else{
//         console.log(arr[top]);
//         top--
//     }
    
// }

// stack(15)
// stack(12)
// stack(14)
// stack(32)
// stack(22)
// pop()