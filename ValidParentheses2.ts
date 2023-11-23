const validParathesis=(s:string)=>{
    let stack:string[]=[];
    const paratheisObj={"}":"{",")":"(","]":"["};
    for(let char of s){
        //check if it is opening parathesis
        if(!paratheisObj[char]){
            stack.push(char);
        }
        else
            if(stack.pop()!==paratheisObj[char]){return false
        }
    }
    stack.length===0
}
console.log(validParathesis("[]{}"))