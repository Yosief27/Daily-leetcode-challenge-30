const subArraySum=(arrNum:Array<number>,k:number):number=>{
    let count:number=0;
    for(let i=0;i<arrNum.length;i++){
        let sum=0;
        for(let j=i;j<arrNum.length;j++){
            sum+=arrNum[j];
            if(sum===k){
                count+=1
                continue;
            }
        }
    }
    return count
}
const subArraySumOptimal=(arrNum:Array<number>,k:number):number=>{
let count=0;
let preSum=0;
const hashTable:{[key:number]:number}={0:1}
for(let i =0;i<arrNum.length;i++){
    preSum+=arrNum[i];
    let targetNum=preSum-k;
    if(hashTable[targetNum]){
        count+=hashTable[targetNum];
    }
    if(!hashTable[preSum]){
        hashTable[preSum]=0;

    }

    hashTable[preSum]+=1;
}
    return count;
}
console.log(
subArraySumOptimal([1,2,-3,1,3],3)
)

