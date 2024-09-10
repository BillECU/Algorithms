//Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
//You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space

var firstMissingPositive = function(nums) {
    let positive = nums.sort((a, b) => a - b);

    let t = 1;
    for(let i = 0; i< nums.length; i++){
        if(positive[i] === t)
            t++;
        else if (positive[i] > t)
            return t;
        else if(positive[i]<t && i === nums.length-1)
            return t;
    }
    return t;
};

console.log(firstMissingPositive([-1,2,1]))
