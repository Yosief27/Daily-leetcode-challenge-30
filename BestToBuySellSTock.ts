const bestBuySell=(num:Array<number>):Array<number>=>{
    let maxP=0
    let buyItem=num[0]
    let curBuy=0
    let curSell=0

    for(let i=1;i<num.length;i++){
        if(buyItem>num[i]){
               curBuy=i;
               buyItem=num[i]
        }

        if(maxP<num[i]-buyItem){
            maxP=num[i]-buyItem;
            curSell=i;
        }
    }
return [maxP,curBuy,curSell] 
}
const bestBuySell1=(num:Array<number>):Array<number>=>{
    let maxP=0
    let buyItem=num[0]
    let curBuy=0
    let curSell=0
    for(let i=1;i<num.length;i++){
       
        buyItem=Math.min(num[i],buyItem)
       maxP=Math.max(maxP,num[i]-buyItem) 
    }
return [maxP] 
}
console.log(bestBuySell([7,1,5,3,7]))
console.log(bestBuySell1([7,1,5,3,6,1,5]))