const maximumSlidingWindow=(arr:Array<number>,k:number):string=>{
    let solution:string="";
    const qArr:Array<number>=[]
    let i=0;
    for (i;i<k;i++){
        //checking the quee if it has an index if so check if it is larger than the current if not remove from the quee
        while(qArr.length!==0 && arr[i]>=arr[qArr[qArr.length-1]])
            {
                qArr.pop()
            }
            qArr.push(i)
    }
    // add answer
    solution+=arr[qArr[0]]+""
    //moving to the next window
    for(i;i<arr.length;i++){
        console.log(qArr,i)
        // check if the first index in the quee is inside the window currently searching for the max
        while(qArr.length!==0 && qArr[0]<=i-k){
            qArr.shift()
            console.log(qArr)
        }
        
        //checking the quee if it has an index if so check if it is larger than the current if not remove from the quee
        while(qArr.length!==0 && arr[i]>=arr[qArr[qArr.length-1]]){
            qArr.pop();
            
        }
        qArr.push(i)

        solution+=" ,"+arr[qArr[0]];
    }
    return solution

}
console.log(maximumSlidingWindow([12,23,43,24,12,12,6],3))