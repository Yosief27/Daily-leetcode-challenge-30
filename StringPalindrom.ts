const stringPalindrom=(s:string):boolean=>{
    const arrS:Array<string>=s.split("")
    const palString=arrS.reduce((pString,ele)=>{
        pString=ele.concat(pString);
        return pString
    })
    return palString!==s?false:true; 
}
console.log(stringPalindrom("carrac"))