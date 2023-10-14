const maxSubArray=(arr:Array<number>):number=>{
   let sol:number=arr[0];
    
    for(let i=1;i<arr.length;i++ ){
        arr[i]=Math.max(arr[i],arr[i]+arr[i-1])
        sol=Math.max(sol,arr[i])
    }
    return sol
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))