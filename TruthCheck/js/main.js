
function truthCheck(collection, pre) {
  // Is everyone being true?
  var count = 0;
  for (var i = 0; i < collection.length; i++) {
  	if ((collection[i].hasOwnProperty(pre) === true) & (Boolean(collection[i][pre]))){
  		count += 1;
  	}else{
      count = count;
    }
  }
  if (count === collection.length) {
  	return true;
  }else{
  	return false;
  }
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
