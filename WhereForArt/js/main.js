
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);
  var result = collection.filter(function(obj){
    for (var i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys)|| obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }

    }
    return true;
  })
  
  // Only change code above this line
 
  console.log(result)
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
