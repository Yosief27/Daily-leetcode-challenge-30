const reverseString=(s)=>{

if(s.length===1){
    return s[0];
}
return s[s.length-1]+reverseString(s.substring(0,s.length-1))

}
const firstElement=(arr,k)=>{
    let sol={};
    let ele=0;
    for(let x of arr){
        sol[x]=sol[x]??0;
        sol[x]=sol[x]+1;
        if(sol[x]===k)return ele=x 

    }
    return ele;
}
console.log(reverseString("josi"));
console.log(firstElement([1,4,5,6,4,3,7],2))
