function fibonacciRecursive(n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    if(n > 1){
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
    }
}

let n = 5;
console.log("Fibonacci series of number ", n, ": ", fibonacciRecursive(n));