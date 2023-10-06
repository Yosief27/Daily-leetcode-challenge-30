function isPalindrom(num:number):boolean{
    const soln=true;
    let numP=0
    let numO=num
    while(num>0){
        let nummod=0;
        nummod=num%10
        num=Math.floor(num/10);
        numP=numP*10+nummod;


    }
    return numP!=numO?false:true
}
console.log(isPalindrom(1221));