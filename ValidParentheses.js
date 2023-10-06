const s1="josi";
const s2="kisu";
const s3=s1.concat(" ",s2,);
console.log(s3);
// or 
const arr=[];
const name1= arr.push(s1,s2);
console.log(arr.join(" "));
//push
//append to last position in a given arr return a number
let countries=["josi","kisu"]
countries.push("meary","natey"
)
//pop remove that last element in a given arr return the last elemen
//return meary
//splice vs slice
//splice change the orginal arr and insert if given ,it have 4 arrguments (starting ,till ,tobe add)
console.log(countries.splice(1,6,"weye"));
console.log(countries);