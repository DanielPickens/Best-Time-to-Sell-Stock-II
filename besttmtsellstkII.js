var maxProfit = function(prices) {
    let ans = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) ans += prices[i] - prices[i - 1];
        }
        return ans;
   
    
    //time complexity: O(n)
  //sc: O(n)
    
    /*
  Success
Details 
Runtime: 72 ms, faster than 89.08% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
Memory Usage: 40.2 MB, less than 51.15% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
  
  */
