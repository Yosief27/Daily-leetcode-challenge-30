//given two strings s and t return true if t is a subsequence of t otherwise false.
function isSubsequence(s:string,t:string):boolean{
    const sourceArr=s.split("");
    const tripArr=t.split("")
    for(let i=0;i<sourceArr.length;i++){
        if(tripArr.length >0 && sourceArr[i]===tripArr[0]){tripArr.shift()}
    }
    if(tripArr.length===0)return true
 return false
}
console.log(isSubsequence("ahbgdc","agce"))