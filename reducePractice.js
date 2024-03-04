function totalVotes(arr) {
    let sol=arr.reduce((count,item)=>{if(item.voted===true){count++} return count },0);
    return sol
    // your code here    
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 //console.log(totalVotes(voters));
 const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];


  const groupByCategory=(arr)=>{
    return arr.reduce((acc,item)=>{
        if(!acc[item.category])acc[item.category]=[];
        acc[item.category].push(item.name);
        return acc
    },{})
  }

  //console.log(groupByCategory(items))

const noDuplication=(arr)=>{
    return arr.reduce((acc,item)=>{
        if(!acc.includes(item))acc.push(item)
        return acc;

    },[]);

}
//console.log(noDuplication([1,2,2,3,3,444,44]));

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((acc,item)=>{
        if(item.age<25 && item.voted===true)
            { acc.numYoungVotes+=1}
            else if((item.age>25 && item.age<35) && item.voted===true)
                {acc.numMidVotes+=1}
                else if(item.age>35 && item.voted===true)
                {acc.numOldVotes+=1}
            return acc;
    },
        {numYoungVotes:0,numYoungPeopel:0,numMidPeople:0,numMidVotes:0,numOldPeople:0,numOldVotes:0})
   // your code here
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}*/
