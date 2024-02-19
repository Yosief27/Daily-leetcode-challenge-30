var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var cart1 = [
    { "name": "Biscuits", "type": "prime", "category": "food", "price": 2 },
    { "name": "Monitor", "type": "prime", "category": "tech", "price": 119.99 },
    { "name": "Mouse", "type": "prime", "category": "tech", "price": 25.50 },
    { "name": "dress", "type": "regular", "category": "clothes", "price": 49.90 },
];
// map return an orginal 
var updateTech = function (value) {
    return value.map(function (item) { return (item.category === "tech" ? __assign(__assign({}, item), { price: item.price * 2 }) : item); });
};
var sol = updateTech(cart1);
console.log(sol);
console.log(cart1);
//calculate the total sum of price for the category under tech 
var sum = cart1.reduce(function (total, item) { return item.category === "tech" ? total + item.price : total; }, 0);
console.log(sum);
