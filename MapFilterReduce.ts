type cartType={

    name:string;
    type:string;
    category:string;
    price:number;
}
const cart1:cartType[]=[
    {"name":"Biscuits", "type":"prime", "category":"food", "price": 2},
    {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
    {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
    {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},

  ]
// map return an orginal 
const updateTech=(value:cartType[]):cartType[]=>{
   
    return value.map(item=>(item.category==="tech"? {...item,price:item.price*2}:item));
 

}
const sol=updateTech(cart1);
console.log(sol);
console.log(cart1);
//calculate the total sum of price for the category under tech 
const sum:number=cart1.reduce((total:number,item:cartType)=>item.category==="tech"?total+item.price:total,0);
console.log(sum);

