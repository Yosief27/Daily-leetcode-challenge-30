//doing again
const maxSlidingW2=(arr:Array<number>,k:number):Array<number>=>{
    const sol:Array<number>=[];
    //first window solution;
    const arrIndex:Array<number>=[];
    let i:number;
    for(i=0;i<k;i++){
        while(arrIndex.length!==0 && arr[i]>arr[arrIndex[arrIndex.length-1]] ){
            arrIndex.pop()
        }
        arrIndex.push(i);
    }
    console.log(arrIndex);
    for(i;i<arr.length;i++){
        //add max window largest number to the solution;
        sol.push(arr[arrIndex[0]]);
        //check if the element in the arrIndex is inside the window size;
        while(arrIndex.length!==0 && arrIndex[0]<=i-k){
            arrIndex.shift();
        }
        while(arrIndex.length!==0 && arr[i]>arr[arrIndex[arrIndex.length-1]]){
            arrIndex.pop();
        }
        arrIndex.push(i)
    }
    sol.push(arr[arrIndex[0]])
    console.log(arrIndex)
    return sol;
}
console.log(maxSlidingW2([7,2,1],2))