//Given a string s containing characters "[","{" or "(" determine if the input string have valued combination of characters
const validParentheses=(s:string)=>{
    const arrString=s.split("")
    const validPar:{[key:string]:string}={
        "{":"}",
        "[":"]",
        "(":")",
    }
    let isValid:boolean=true;
    const arrClosed:string[]=[];
    for(let i=0;i<s.length;i++){
        let currPar=s[i];
        if(validPar[currPar]) {
            arrClosed.push(validPar[currPar])
        }else{
            if(currPar!==arrClosed.pop()){
                isValid=false;
                break;
            }
        } 

    }
    return isValid && arrClosed.length===0;
}
console.log(validParentheses("{(()}[]"))