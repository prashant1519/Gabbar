let A=[7,3,15,2]

let stk=[]
let ans=[]
let top=-1


for(i=0;i<A.length;i++){
while(stk.size>0 && stk.peek()>=A[i]){
    stk.pop()
}
if(stk.size===0){
    ans[i]=-1
}
else if(stk.peek()<A[i]){
    ans[i]=stk.peek()
    push[A[i]]
}

}

function peek(){
    if(top === -1){
        console.log("underflow");
    }
    else{
        stk[top]
    }
}