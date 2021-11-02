function isPrime(n) {
    if (n <= 3) return n > 1;

    if ((n % 2 === 0) || (n % 3 === 0)) return false;

    let count = 5;

    while (Math.pow(count, 2) <= n) {
        if (n % count === 0 || n % (count + 2) === 0) return false;

        count += 6;
    }

    return true;
}

let n = 19;
console.log("Is number ", n, "prime? ", isPrime(n));