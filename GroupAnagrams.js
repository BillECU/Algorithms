//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//Example:
//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//Time complexity: O(n⋅klogk)
//Runtime Complexity
//O(n*klogk), where n is the number of strings and k is the length of longest string

//Space Complexity 
//O(n*k), where we sort and then create map key

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let temp = new Map();
    strs.forEach(s => {
        let sorted = s.split("").sort().join("");
        if(!temp.has(sorted)) {
            temp.set(sorted, []);
        }
        temp.get(sorted).push(s);
    });
    //Array.from(temp.values())
    return ([...temp.values()]);
};
