function longestWord(str){
    const arr = str.split(" ");

    var max = 0;
    var index = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > max){
            max = arr[i].length;
            index = i;
        }
    }
    return arr[index];
}

let str = "dog is friend of human";
console.log("The longest word in sentence:", str, "; is", longestWord(str));