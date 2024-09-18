//Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
//You must not use any built-in exponent function or operator.
//For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

//Runtime Complexity
//Logarithmic, O(log n).

//Memory Complexity
//Linear, O(1).

/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
    let s = 1;
    let e = x;
    while(s <= e){
        const mid = Math.floor((s+e)/2);
        const result = mid*mid;
        if(result === x || s === mid)
            return mid;
        else if(result < x)
            s = mid;
        else
            e = mid;
    }
    return 0;
};
