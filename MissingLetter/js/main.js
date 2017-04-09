
function fearNotLetter(str) {
  for (var i = 0; i < str.length-1; i++) {
    var a = str.charCodeAt(i);
    var b = str.charCodeAt(i+1);
    if (a !== (b-1)) {
      var c = String.fromCharCode(a+1);
    }
  }
  console.log(c);

}

fearNotLetter("abce");
