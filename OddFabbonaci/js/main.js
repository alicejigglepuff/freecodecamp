
function sumFibs(num) {

  var arr = [1, 1];
  while (arr[arr.length-2]+arr[arr.length-1]<num){
    arr.push(arr[arr.length-2]+arr[arr.length-1]);
  }
  console.log(arr);
  

  var odd = arr.reduce(function(prev, curr){
    if (curr%2 !== 0) {return prev + curr;}
      else {return prev;}
  });
  console.log(odd);
}
sumFibs(10);
