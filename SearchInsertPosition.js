//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.

//Runtime Complexity
//Logarithmic, O(log n).

//Memory Complexity
//Linear, O(1).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    const found = nums.findIndex(i => i >= target);
    return found >= 0 ? found : nums.length;
};
