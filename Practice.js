var cart=[
    {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
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
     value.price=value.price -Math.floor(value.price*0.2,2)
     return  value
    }
    return value 
  }
  function applyCoupon(items){
    const discountItems=items.map(mapfun)
    console.log(discountItems);

  }
  primeItems(cart)
  applyCoupon(cart)