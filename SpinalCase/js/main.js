
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
//   var newString = str.concat(0);
//   for (i=1; i<str.length; i++){
//     if ((str[i] === str[i].toUpperCase()) && (str[i-1]!=(" "||"_")) ){
//       newString += ' ' + str[i]; 
//     }else{
//       newString += str[i];
//     }
//   }
//   var a = newString.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');
  
//   return a;
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
