//Given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
//Return the maximum number of ways that you can make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0

//Runtime complexity
//Quadratic, O(m×n), where m is the number of denominations and n is the total amount.

//Memory complexity
//O(n), where n is the total amount.

let solveCoinChange = function(denominations, amount) {
  let ways = [];
  for(let i = 0; i <= amount; i++)
    ways[i] = 0;
  ways[0] = 1;

  let len = denominations.length;
  for(i = 0; i < len; i++)
    for(j = denominations[i]; j<=amount; j++)
      ways[j] += ways[j - denominations[i]];
  return ways[amount];
};
