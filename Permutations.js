//Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

//Runtime Complexity
//Factorial, O(n!).

//Memory Complexity
//Factorial, O(n!).

let permutation = function(arr, index = 0, ans = []){
  if (index === arr.length) {
    console.log(arr);
    ans = ans.push(arr.slice(0));
  }
 

  const r = arr.length;
  for (let i = index; i < r; i++) {
    [arr[i], arr[index]] = [arr[index], arr[i]];
    permutation(arr, index + 1, ans);
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return ans;
}

//console.log(permutation([1,2,3]));
