/*Task:
Complete function saleHotdogs,
function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table),
return how much money will the customer spend to buy that number of hotdogs.

Number of hotdogs:       Price per unit (cents):
n < 5	                    100
n >= 5 and n < 10	        95
n >= 10	                    90*/



// SOLUTION:
function saleHotdogs(n){
    let price =  n < 5? 100 : n >= 5 && n < 10? 95 : 90;
    return n * price;
}

console.log(saleHotdogs(4));// 100
console.log(saleHotdogs(5));// 475
console.log(saleHotdogs(100));// 9000
