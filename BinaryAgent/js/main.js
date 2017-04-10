
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  newArr = arr.flatten();
  console.log(newArr);
}

steamrollArray([1, [2], [3, [[4]]]]);
