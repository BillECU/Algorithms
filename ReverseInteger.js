//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Linear, O(1).

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    let num = 0;
    const max = Math.pow(2,31) - 1;
    const min = - Math.pow(2,31);

    while (x!==0){
        const lastDigit = x%10;
        num = num *10+ lastDigit;
        x= parseInt(x/10);
    }
    if(num > max || num < min){
        return 0;
    }
    return num;
};
