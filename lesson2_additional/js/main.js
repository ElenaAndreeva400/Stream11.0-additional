let money = 266219;

let result = eval(money.toString().split('').join('*'));
console.log(result);
// или
let result = money.toString().split('').map(function(e){return parseInt(e)}).reduce(function(a,b){return a*b}); 
console.log(result);


result **= 3;
console.log(result);


console.log(String(result).slice(0,2));
// или
console.log(String(result).substring(0,2));















