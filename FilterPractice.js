function fiveCharactersOrFewerOnly(arr) {
    // your code here
    return arr.filter(item=>item.length<=5);
  }
  // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(item=>item.member===true).map(item=>item.name)
  }
  // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));


  let fruits = ['apple', 'Peach', 'carrot', 'Banana', 'Watermelon', 'pomegranate'];

// fruits.sort((a, b)=> {
  
//     let x=a.toLowerCase();y=b.toLowerCase();
//     return x===y?0:x>y?1:-1;
// });


console.log(fruits.sort((a,b)=>{
    let x=a.toLowerCase();y=b.toLowerCase();
    return x===y?0:x>y?-1:1;

}));