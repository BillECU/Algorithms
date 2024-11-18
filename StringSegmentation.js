//Given a dictionary of words and a large input string. 
//You have to find out whether the input string can be completely segmented into the words of a given dictionary.

//Runtime Complexity
//Exponential, O(2^n), if we use only recursion.
//With memoization, the runtime complexity of this solution can be improved to be polynomial, O(n^{2})

//Memory Complexity
//Polynomial, O(n^2).

let canSegmentString = function(s, dictionary) {
  //TODO: Write - Your - Code
  if(dictionary.has(s))
    return true;
  let m = [];
  function check_seg(index){
    if(index === s.length)
      return true;
    else if(m[index]!== undefined)
      return m[index]
    let value = false;
    for(let word of dictionary){
      if(s[index]===word[0]){
        if(s.substr(index,index+word.length)===word)
          value = value || check_seg(index+word.length)
      }
    }
    m[index] = value;
    return value; 
  }
  return check_seg(0);
};
