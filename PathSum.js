//Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Logarithmic, O(log n).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    else if(!(root.left || root.right)) {
        return root.val === targetSum;
    }
    else {
        return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val)
    }
};
