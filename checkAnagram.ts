//two words are anagram if they have the same letter length and alphabets
//anagram === nagaram
// time complixity is n2
const checkAnagram = (s: string, t: string): boolean => {
    let sArr = s.split("");
    let tArr = t.split("");
    if (s.length !== t.length) return false;
    for (let val of sArr) {
        let res = tArr.findIndex(s => s === val);
        tArr.splice(res,1)
    }
    if(tArr.length===0)return true;
    return false

};
console.log(checkAnagram("rac","car"))
//time complixity is nlogn 
const checkAnagramSort=(s:string,t:string):boolean=>{
    return s.split("").sort().join("")===t.split("").sort().join("")
}
console.log(checkAnagramSort("rac","carr"))