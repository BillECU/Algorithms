//Given the root of a binary tree, display the node values at each level. 
//Node values for all levels should be displayed on separate lines.

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Linear, O(n).

let level_order_traversal = function(root) {
  if(!root)
    return;
  let queues = [
    [],
    []
  ];
  let parents = queues[0];
  let children = queues[1];
  parents.push(root);
  let level = 0;
  while(parents.length>0){
    let temp = parents.shift();
    console.log(temp.data+" ");
    if(temp.left)
      children.push(temp.left);
    if(temp.right)
      children.push(temp.right)
    if(parents.length == 0){
      level+=1;
      parents = queues[level%2];
      children = queues[(level+1)%2];
    }
  }
};
