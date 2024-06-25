/**
 * https://www.geeksforgeeks.org/sieve-of-eratosthenes/
 * 
 * Sieve of Eratosthenes / Prime Number Sieves
 * Problem: Given a number n, print all primes smaller than or equal to n. 
 * It is also given that n is a small number. 
 * 
 * Example:
 * 
 * Input : n =10
 * Output : 2 3 5 7
 * 
 * Input : n = 20 
 * Output: 2 3 5 7 11 13 17 19
 * 
 * */
function getPrimeNos(n){
  
    // create an array of length given no with value true.
    let primeNos = Array.from({length:n+1}, (_,i)=>true)
    
    
    for(let i=2; i*i <= n; i++ ){
      if(primeNos[i] == true){
        for(let k = i * i ; k <= n; k += i){
          primeNos[k] = false
        }
      }
  
    }
    
    // print all no which primeNos value is true.
    for(let index = 2 ; index <= primeNos.length ; index++){
      if(primeNos[index] === true){
        console.log(index)
      }
    }
    
  }
  
  getPrimeNos(10)
  console.log('------------------')
  getPrimeNos(30)