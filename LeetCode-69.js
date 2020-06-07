/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  i = x;
 /** i yi x'e eşit olarak tanımlarız*/
  while (i * i > x) i = ((i + x / i) / 2) | 0;
    /** i * i > x ten büyükse veya i  i+x/i/2 den kalan 0 ise i döndürülür*/
  return i;
};
