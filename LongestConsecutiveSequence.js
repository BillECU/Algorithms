//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
//You must write an algorithm that runs in O(n) time.

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Linear, O(1).
  
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    const len = sorted.length -1;
    if(len < 0) {
        return 0;
    }
    let max = 1;
    let current = 1;
    for(let i = 0; i < len; i++){
        if (sorted[i+1] === sorted[i] +1) {
            current +=1;
        }
        else if(sorted[i+1] > sorted[i] +1) {
            max = max < current ? current : max;
            current = 1;
        }
    }
    return max < current ? current : max;
};
