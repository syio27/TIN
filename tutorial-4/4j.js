let binarySearch = function (arr, x) {
    let start=0, end=arr.length-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) return true;
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return false;
}

let arr = [1,4,1,6,4,2,13,5,32,213];
let x = 1;

if (binarySearch(arr, x))
    console.log("Element found!");
else console.log("Element not found!");
