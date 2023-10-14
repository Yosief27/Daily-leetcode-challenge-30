const maxSubArray=(arr:Array<number>):number=>{
   let sol:number=arr[0];
    for(let i in arr){
        sol+arr[i]<arr[i]?sol=sol+arr[i]:sol=arr[i]
    }
    return sol
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))