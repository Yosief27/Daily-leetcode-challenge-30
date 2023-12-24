const maximumSlidingWindow=(arr:Array<number>,k:number):string=>{
    let str="";
    //quee data structure to stor max number on the siding window
    const QArr:Array<number>=[]
    let i:number;
    //for the first window size 
    for(i=0;i<k-1;i++){
        while(QArr.length!==0 && arr[i]>=arr[QArr[QArr.length-1]]){
            //if current element is large than the last element in the quee remove from the front 
            QArr.shift();

        }
        // add the current to the end of quee
        QArr.push(i);
    }
    for(i;i<arr.length;i++){
        //output the maximum element in each shift of the window by one 
        str+=arr[QArr[0]]+",";
        // check if element in quee is inside the next window 
        while(QArr.length!==0 && QArr[0]<=i-k){
            QArr.shift()
        }

         while(QArr.length!==0 && arr[i]>=arr[QArr[QArr.length-1]]){
            QArr.shift();

        }
        QArr.push(i);
    }
    return str
}
console.log(maximumSlidingWindow([12,78,42,90,87],3))