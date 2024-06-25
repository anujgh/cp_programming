/** 
 * https://www.geeksforgeeks.org/c-program-for-efficiently-print-all-prime-factors-of-a-given-number/
 * Problem: Given a number n, write an efficient function to print all prime factors of n. 
 * For example, 
 * if the input number is 12, then output should be “2 2 3”. 
 * And if the input number is 315, then output should be “3 3 5 7”.  
 */
function getprimeFactors(n){
  // if we use this variable to store fectors then space complexity of this function is O(log(n))
  // and else we just console.log(i) instead of fectors.push(i) then space complexity will be O(1)
  let fectors = [] 
  for(let i = 2; i <=n ; i++){
    if(n % i === 0){
      fectors.push(i); // space complaexity O(log(n))
      // connsole.log(i); // space complexity O(1)
      n = n / i;
      i = 1;
    }
    
    if(i/n === 1){
      break;
    }
  }
  console.log(fectors)
}

getprimeFactors(40);


function getPrimeFectorWhileLoop(n){
  let c = 2
  while(n>1){
    if(n % c === 0){
      n = n / c;
      console.log(c)
    } else {
      c++
    }
  }
}

getPrimeFectorWhileLoop(40)