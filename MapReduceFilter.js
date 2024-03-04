const convertToString=(arr)=>{
    let sol=[];
    //using tostring
    //sol=arr.map(item=>(item).toString())
    //using ""
    //sol=arr.map(item=>""+item)
    //using template litral
    sol=arr.map(item=>`${item}`)
    //parseInt is used to convert string to number 
    // if x ="100";
    // number=parseInt(x);
return sol;

}

const  capitalizeNames=(arr)=>{
    let sol=[]
    let sol2=[]
    sol=arr.map(item=>item.slice(0,1).toUpperCase()+item.slice(1).toLowerCase())
   // sol2=sol.map((item,i)=>{i===0?item.toUpperCase():item.toLowerCase()});

    return sol;
  // your code here
}
function namesOnly(arr){
    // your code here
    let sol=arr.map(item=>item.age>18?`${item.name} can go to the Matrix !`:`${item.name} is under age!`)
    return sol
  }
  
 /* console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
    ]))

*/

//console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
//console.log(convertToString([2,4,200]))

//console.log(parseInt("9.900",10));



