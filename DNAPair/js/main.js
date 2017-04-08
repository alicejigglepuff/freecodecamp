
function pairElement(str) {
  var arr = str.split("");
  var result = [];
  for (i=0; i<str.length; i++){
    var a = str.charAt(i);
    if (a == "A"){
      var b = "T";
    }else if (a == "T"){
      var b = "A";
    }else if (a == "G"){
      var b = "C";
    }else{
      var b = "G";
    };
    arr[i] = (arr[i] + b).split("");
    result.push(arr[i]);
  }
  console.log(result);
}

pairElement("GCG");
