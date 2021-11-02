function amountTocoins(amount, coins){
    let converted = [];
    if (amount === 0)
        return result
    let i = 0;
    let value = coins[0];
    while (amount > 0) {
        if (amount >= value) {
            converted.push(value);
            amount -= value;
        } else {
            i++;
            if (i < coins.length)
                value = coins[i];
        }
    }
    return converted;
}

let amount = 46;
let coins = [25, 10, 5, 2, 1];
console.log(amount,"converted to coins:",amountTocoins(amount,coins));