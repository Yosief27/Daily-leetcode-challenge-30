// longest palindrome in a given string
const longestPalindrom=(s:string):string=>{
    let currentLongest=[0,1];
    for(let i=0;i<s.length;i++){
        const odd=expandAroundChar(s,i-1,i+1);
        const even=expandAroundChar(s,i-1,i);
        const longest=odd[1]-odd[0]>even[1]-even[0]?odd:even
        currentLongest=currentLongest[1]-currentLongest[0]>longest[1]-longest[0]?currentLongest:longest;
        
    }
    return s.slice(currentLongest[0],currentLongest[1]);
}
const expandAroundChar=(s:string,leftIdx:number,rightIdx:number):number[]=>{
    while(leftIdx>=0 && rightIdx<s.length){
        if(s[leftIdx]!==s[rightIdx])break;
        leftIdx--;
        rightIdx++;
    }

    return[leftIdx+1,rightIdx]

}
console.log(longestPalindrom("josiraccarkisu"))