//Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

//Runtime Complexity
//Polynomial, O(n^2).

//Memory Complexity
//Polynomial, O(n^2).

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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    const dfs = (root, sum, path) => {
        if (root) {
            path.push(root.val);
            sum += root.val;
            if (!root.left && !root.right && sum === targetSum) {
                result.push([...path])
            }

            dfs(root.left, sum, path)
            dfs(root.right, sum, path)
            path.pop();
        }
    }
    dfs(root, 0, []);
    return result;
};