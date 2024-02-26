type UpperCaseChar = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
interface charKey{
    [key:string]:number;
}
const minWindow2=(s:string,t:string):string=>{
 let sol:string="";
 let right:number=0;
 let left:number=0;
 let minLen:number=Infinity;
 let minStart:number=0;
 let reminder:number=t.length;
 let hasMap:{charKey}|{}={};
 for(let c of t.split("")){
    hasMap[c]=(hasMap[c]|0)+1;

 }
 let sArr=s.split("");
 console.log(sArr,hasMap,reminder);
while(right<s.length){
    //travers from left to right and while doing so if you find the character decrease its seen value and remaining value too.
    if(hasMap[sArr[right++]]-->0){
        reminder--;
    }
    // if reminder is zero meaning we have a sub solution ,the we compute the length of the substring with the current smallest substring
    // and we save both the smallest substring length and its starting character position
    while(reminder===0){
        if(right-left<minLen){
            minLen=right-left;
            minStart=left;

        }
        // next we move the left pointer check for the available characters if we find so increase both the remaining and left value 
        if(hasMap[sArr[left++]]++===0){
            reminder++;
        }
    }
}

 return sol=minLen===Infinity?"Nothing":s.substring(minStart,minLen);
}
console.log(minWindow2("ABCFDEABQDON","ABD"));
