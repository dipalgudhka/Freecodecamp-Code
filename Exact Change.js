/*
Although long, I am happy that it worked
*/

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  // Here is your change, ma'am.
  var total = 0;
  for (var j in cid) {
    total += cid[j][1];
  }
  total = Math.round(total*100)/100;
  console.log(total);
  
  if (change > total) {
    return "Insufficient Funds";
  }
  else if (change === total) {
    return "Closed";
  }
  
  var currency = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  
  var i = 8, output = [];
  while (change !== 0 && i >= 0) {
    // console.log(cid[i][0] + " and " + change);
    // change = change - cid[i][1];
    
    var prevChange = change;
    change = minusIt(change, currency[i], cid[i][1]);
    // console.log(cid[i][0] + " and " + change + " and " + Math.round((prevChange - change)*100)/100);
    if ((prevChange - change) !== 0) {
      output.push([cid[i][0], Math.round((prevChange - change)*100)/100]);
      console.log(output);
    }
    i--;
  }
  
  if (change !== 0) {
    return "Insufficient Funds";
  }
  
  return output;
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


function minusIt (change, denomination, quantity) {
  
  var multi;
  // console.log(change, denomination, quantity);
  if (denomination > change) {
    return change;
  }
  
  if (change - quantity < 0) {
    if (denomination < change) {
      multi = Math.floor(change / denomination);
    }
    
    change -= multi*denomination;
  }
  else {
    if (denomination <= change) {
      change = change - quantity;
    }
  }
  
  return Math.round(change*100)/100;
}

// minusIt(96.74, 100.00, 100.00);

/*
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".
*/
