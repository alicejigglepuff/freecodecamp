function sumPrimes(num) {
  function isPrime(number){
    var count = 0; 
    for (var i = 1; i <= number; i++) {
      if (Number.isInteger(number/i) == true) {
        count = count +1;
      }
      
    }
    if (count ==2) {
      return true;
    };
  }

   if (num === 1){
    return 0;
  }
  var sum = 0;
  for (var j = 2; j <= num; j++) {
    if (isPrime(j)==true) {
      sum = sum + j;
    }
  }
  console.log(sum);
};

sumPrimes(7);
