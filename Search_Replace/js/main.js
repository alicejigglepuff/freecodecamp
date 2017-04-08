
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  };
  console.log(str.replace(before, after));
  
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

