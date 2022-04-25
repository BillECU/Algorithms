//Given the root of a binary tree, determine if it is a valid binary search tree (BST).

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Linear, O(n).

let is_bst = function(root) {
  //TODO: Write - Your - Code Validate Binary Search Tree
  if(!root)
    return false;
  let max = Number.POSITIVE_INFINITY;
  let min = Number.NEGATIVE_INFINITY;
  function check_bst(root, max, min){
    if(!root)
      return true;
    else if(root.data>max||root.data<min)
      return false;
    else
      return(check_bst(root.left,root.data,min)&&check_bst(root.right,max,root.data))
  }
  return check_bst(root,max,min);
};
