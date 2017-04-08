
// function myReplace(str, before, after) {
//   var array = str.split(" ");
//   var index = array.indexOf(before);
//   var result = array.splice(index, 1, after);
//   document.write("result:" + result);
//   document.write("   array: " + array);
//   document.write("   index: " + index);
// }

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

function translatePigLatin(str) {
	var special = ["a", "e", "i", "o", "u"];
  if (special.indexOf(str.charAt(0)) > (-0.5)) {
  	var output =  str + 'way';
  }else if (special.indexOf(str.charAt(1))>(-1)) {
  	var a = str.charAt(0);
  	output = str.slice(1) + a + "ay";
  	
  }else{
  	a = str.charAt(0) + str.charAt(1);
  	output = str.slice(2) + a + "ay";
  }
  console.log(special.indexOf(str.charAt(0)));
  console.log(output)
 
}

translatePigLatin("consonant");