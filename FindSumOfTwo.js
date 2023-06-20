//Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. 
//Return true if the sum exists and return false if it does not.

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Linear, O(n).

let findSumOfTwo = function(A, val) {
  for(let i in A){
    if (list.includes(val-A[i]))
      return true;
  }
  return false;
};
