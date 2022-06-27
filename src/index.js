module.exports = function reverse (n) {
  n=Number(n);
  if(n<0){
    n=n*-1;
  }
  n= Number(n.toString().split('').reverse().join(''));
  return n
}
