var cart=[
    {"name":"Biscuits", "type":"prime", "category":"food", "price": 2},
    {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
    {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
    {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
  ]

  
  function primeItems(items){
    // write your code here
    const filterItems=items.filter(item=>item.type==="prime")
    console.log(filterItems);
  }
  function mapfun(value){
    if(value.category==="tech")
    {
     value.price=value.price -Math.floor(value.price*0.2)
     return  value
    }
    return value 
  }
  function  nameToUpper(value){
    const objColl =value.name.toUpperCase();
    return objColl;
   }
   const updateName=(cart)=>{
      cart.map(nameToUpper(item))
   }
  function applyCoupon(items){

    const discountItems=items.map(mapfun)
    console.log(discountItems);

  }

  function couponReduce(items){
    const discountReduce=items.reduce((accItems,item)=>{
     if(item.type==="prime")
    {
     item.price=item.price -Math.floor(item.price*0.2,2)
     return [...accItems,item] 
    }
    return [...accItems,item] ;
    },[])
    return discountReduce
  }

  
 // primeItems(cart)
  //applyCoupon(cart)
 console.log(couponReduce(cart))