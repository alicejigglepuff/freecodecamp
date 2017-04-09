
function sumFibs(num) {
  var a = 0;
  var b = 1;
  var i = 1;
  var arr = [1, 1];
  while (a<num){
    a = Number(arr[i-1]) + b; 
    arr.push(a);
    b = a;
    i += 1;

  }
  console.log(arr);
}

sumFibs(10);
