function isPalindrom(string){
    for(let i = 0; i < string.length/2; i++){
        if(string[i] !== string[string.length-i-1]){
            return false;
        }
    }
    return true;
}

let string = "kek";
console.log("Is ", string," polindrom?", isPalindrom(string));