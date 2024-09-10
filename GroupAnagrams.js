//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//Example:
//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

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
