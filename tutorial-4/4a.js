const facRecursive = n => {
    if (n === 0 || n === 1)
        return 1;
    return n * facRecursive(n - 1);
}

function facIterative(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++)
        factorial *= i;
    return factorial
}

let n = 4;
console.log("Recursive factorial of number ", n, ":", facRecursive(n));
console.log("Iterative factorial of number ", n, ":", facIterative(n));