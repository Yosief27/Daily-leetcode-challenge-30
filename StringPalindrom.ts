const stringPalindromWithAnyTypeInput=(s:string):boolean=>{
    const re=/[\W_]/g // [^A-Za-z0-9];
    
    const arrS:Array<string>=s.toLowerCase().replace(re,"").split("");
    console.log(arrS)
    const palString:Array<string>=arrS.reduce((pString:Array<string>,ele)=>{
        // pString=ele.concat(pString);
        pString.unshift(ele);
        return pString
    },[])
    console.log(palString);
    return palString.join("")!==arrS.join("")?false:true; 
}
console.log(stringPalindromWithAnyTypeInput("A man, a plan, a canal. Panama"))