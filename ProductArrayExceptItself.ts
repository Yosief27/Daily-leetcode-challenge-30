const arrayProductExcept=(arr:number[]):number[]=>{
    const arrLeft:number[]=[]
    arrLeft[0]=1

    
    const arrRight:number[]=[]
    arrRight[arr.length-1]=1
    for(let i=1;i<arr.length;i++){
        arrLeft[i]=arr[i-1]*arrLeft[i-1]
        
    }
    console.log(arrLeft)
      for(let i=arr.length-2;i>=0;i--){;
        arrRight[i]=arr[i+1]*arrRight[i+1]

    }
    console.log(arrRight)
    const arrSoln:number[]=[]
    for(let i=0;i<arr.length;i++){
        arrSoln[i]=arrLeft[i]*arrRight[i];
    }


    return arrSoln
}
console.log(arrayProductExcept([1,2,3,4]))