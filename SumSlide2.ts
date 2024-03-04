const SumSlide2=(arr:Array<number>,k:number):Array<number>=>{
    const solu:Array<number>=[];
    let sumK=arr.slice(0,k).reduce((total:number,x:number)=>{return total+x},0)
    solu.push(sumK);
    for(let i=1;i<arr.length-k+1;i++){
        sumK=sumK - arr[i-1];

        sumK=sumK + arr[i+k-1];
        console.log(sumK)
        solu.push(sumK)

    }
    return solu;

}
console.log(SumSlide2([2,3,4,1],3))