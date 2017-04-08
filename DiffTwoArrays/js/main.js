
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
  // element doesn't exist in array2
  newArr.push(arr1[i]);
    }
  }
  
  for (var i = 0; i < arr2.length; i++) {
    if ((arr1.indexOf(arr2[i]) === -1) && (newArr.indexOf(arr2[i] === -1))){
  // element doesn't exist in array2
  newArr.push(arr2[i]);
    }

  }
  console.log(newArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);