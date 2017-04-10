function smallestCommons(arr) {
  arr.sort();
  var a = arr[0];
  var b = arr[1];
  var completeArr = [];
  var result = b;
  
  function isLCM(small, large){  
    var aMultiple = 1;
    var i = 1;
    while (Number.isInteger(aMultiple/large) == false) {
      aMultiple = small *(i+1);
      i++;
    }
    console.log(aMultiple);
  }

  for (var i = a; i <= b; i++) {
    completeArr.push(i);
  }
  
  while (Number.isInteger(c) == false){
    var c = 0;
    for (var i = 0; i < completeArr.length; i++) {
      c += (result/completeArr[i]); 
    }
      result +=1;
    
  };
  console.log(result-1);
}



smallestCommons([18,23]);
