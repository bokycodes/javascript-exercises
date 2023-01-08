const add = function(...array) {
	let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(niz) {
  let sum = 0;
  for(let i = 0; i < niz.length; i++){
    sum = sum + niz[i];
  }
  return sum;
};

const multiply = function(array) {
  let res = 1;
  for(let i = 0; i < array.length; i++){
    res = res * array[i];
  }
  return res;
};

const power = function(a,b) {
  // 4 and 3 = 4 * 4 * 4
  let c = a;
	for(let i = 1; i < b; i++){
    a = a*c;
  }
  return a;
};

const factorial = function(a) {
	// 4 = 4*3*2*1
  let factorial = 1;
  if(a === 0 || a === 1){
    return 1;
  }
  for(let i = a; i > 0; i--){
    factorial = factorial * i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
