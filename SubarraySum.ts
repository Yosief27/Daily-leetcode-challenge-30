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
console.log(
subArraySum([1,2,3,-3,1,1,1,4,2,-3],3)
)

