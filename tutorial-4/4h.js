function secondLargest(nums){
    if(nums.length < 2){
        throw "The size of array should be greater than 2";
    }
    var first = -2147483648; // INTEGER.MIN_VALUE in java
    var second = -2147483648;
    console.log(second);
    for(let i=0; i<nums.length; i++){
        first = Math.max(first, nums[i]);
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== first){
            second = Math.max(second, nums[i]);
        }
    }

    return second;
}

function secondLowest(nums){
    if(nums.length < 2){
        throw "The size of array should be greater than 2";
    }
    var first = 2147483647; // INTEGER.MIN_VALUE in java
    var second = 2147483647;
    for(let i=0; i<nums.length; i++){
        first = Math.min(first, nums[i]);
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== first){
            second = Math.min(second, nums[i]);
        }
    }

    return second;
}


let nums = [45,23,132,34,2,4,6,1,2,8,5,2,234];
console.log("The second largest of array", nums, "is", secondLargest(nums) );
console.log("The second lowest of array", nums, "is", secondLowest(nums) );