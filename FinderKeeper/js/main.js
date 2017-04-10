
function findElement(arr, func) {
  
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
    	result.push(arr[i]);
    }
  }
  console.log(result[0]);
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
