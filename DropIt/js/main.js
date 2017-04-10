
function dropElements(arr, func) {
  // Drop them elements.
  var num = 0;
  
  for (var i = 0; i <= arr.length; i++) {
  	if (func(arr[i])===true) {
  		num = i;
      break;
  	}
    
  }
  console.log(arr.slice(i));
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
