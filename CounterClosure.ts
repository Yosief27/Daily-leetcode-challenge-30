// writing a function  which accepts an integer as its first argument and   return increment,decrement,reset function 
function ConuterClosure(init:number){
    let counterInit=init
    const increment=()=>++counterInit
    const decrement=()=>--counterInit
    const reset=()=>{
        counterInit=init;
        return counterInit;
    }
    
    
    
    
    return{
        increment:increment,
        decrement:decrement,
        reset:reset
    
    }
}
const checkClosure=ConuterClosure(3)
console.log(checkClosure.increment())
console.log(checkClosure.decrement())
console.log(checkClosure.reset())
