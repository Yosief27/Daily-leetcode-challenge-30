//Given a string s containing characters "[","{" or "(" determine if the input string have valued combination of characters
function validParentheses(s:string):boolean{
    const arrString=s.split("")
    const validPar:{[key:string]:string}={
        "{":"}",
        "[":"]",
        "(":")",
    }
    let isValid:boolean=true;
    const arrClosed:string[]=[];
    arrString.every((val:string,i:number,arr:string[]) => {
        if(validPar[val])
        {arrClosed.push(validPar[val])}
        else{
            if(val!=arrClosed.pop()){
                isValid=false;
                //as a break
                return isValid;
            }
            //as continue
    }return isValid
    });
    return isValid && arrClosed.length===0;
}


console.log(validParentheses("{(()}[]"))