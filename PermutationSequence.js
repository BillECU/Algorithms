//Given n and k, return the kth permutation sequence.

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Linear, O(n).

let find_kth_permutation = function(n, k, result) {
  //TODO: Write - Your - Code
  n_size = n.length;
  let premutation_size = [1];
  for(let i = 1; i < n_size; i++)
    premutation_size[i] = premutation_size[i-1]*i;
  
  let order = k;
  order--;

  for(let i  = n_size; i>0; i--){
      let leading_digit = Math.floor(order/premutation_size[i-1]);
      order = order%premutation_size[i-1];
      result.push(n[leading_digit]);
      n.splice(leading_digit,1);
  }
  
  return result.join("");
};
