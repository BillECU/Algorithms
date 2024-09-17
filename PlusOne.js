//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
//Increment the large integer by one and return the resulting array of digits.

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Linear, O(1).

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    const len = digits.length-1;
    for(let i =len; i>=0; i--){
        if((digits[i]+ 1)<10){
            digits[i]+=1;
            return digits;
        }
        else
            digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};
