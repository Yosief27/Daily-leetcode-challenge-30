type letterNumber={
    [val:string]:number;
}
const LongestKDistinctSubstring=(s:string,k:number):letterNumber=>{
    const sol:letterNumber={};
    for(let i=0;i<s.length;i++){
        let char=s.charAt(i);
        console.log(char);
        if(sol[char]===undefined){
            sol[char]=0;
        }
        sol[char]=sol[char]+1;
    }
    
    return sol;
}
console.log(LongestKDistinctSubstring("aaabbcc",2))