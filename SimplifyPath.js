//You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

//The rules of a Unix-style file system are as follows:

//A single period '.' represents the current directory.
//A double period '..' represents the previous/parent directory.
//Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
//Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
//The simplified canonical path should follow these rules:

//The path must start with a single slash '/'.
//Directories within the path must be separated by exactly one slash '/'.
//The path must not end with a slash '/', unless it is the root directory.
//The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
//Return the simplified canonical path.
//"..." is a valid name for a directory in this problem.

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Linear, O(1).

/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function(path) {
    //reverse version
    // let reverse = path.split('/').filter(p => p !=='.' && p!=='').reverse();
    
    // let answer = [];
    // let parent = 0;
    // for(let i = 0; i < reverse.length; i++){
    //     if(reverse[i] === '..')
    //         parent += 1;
    //     else{
    //         parent > 0 ? parent-=1 : answer.push(reverse[i]) ;
    //     }
            
    // }
    // return '/' + answer.reverse().join('/');
    let clean =  path.split('/').filter(p => p !=='.' && p!=='');
    let answer = [];
    for (const p of clean){
        if(p === '..')
            answer.pop();
        else
            answer.push(p)
    }
    return '/' + answer.join('/');
};
