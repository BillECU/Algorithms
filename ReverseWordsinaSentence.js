//Reverse the order of words in a given sentence (an array of characters). 
//Take the “Hello World” string for example:"Hello World"-->"World Hello"

//Runtime complexity
//Linear, O(n), position of all the elements in the sentence is changed.

//Memory complexity
//Constant, O(1).

let reverseWords = function(sentence) {     
  let words = sentence.split(" ").reverse().join(" ");;
  console.log(words)
  return words;
};
