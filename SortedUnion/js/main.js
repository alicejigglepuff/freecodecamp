
function uniteUnique(arr1, arr2, arr3) {
   // var args = Array.prototype.slice.call(arguments, 1);
   // var newArr = args.join(arr);
   // document.write(newArr);
   // console.log(newArr.length);
	var newArr = arr1.concat(arr2).concat(arr3);
	
	newArr.reduce(function(arrA, arrB){
		return arrA.concat(arrB.filter(function(i){
      		return arrA.indexOf(i) === -1;
      	}));
	});
 
	console.log(newArr);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


function uniteUnique(arr1, arr2, arr3) {
 var newArr;
 //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
